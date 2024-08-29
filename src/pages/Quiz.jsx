import React, {useEffect, useReducer, useState} from 'react';
import Answers from "../Components/Answers.jsx";
import ProgressBar from "../Components/ProgressBar.jsx";
import MiniPlayer from "../Components/MiniPlayer.jsx";
import {useParams, useNavigate} from "react-router-dom";
import useQuestions from "../Hooks/useQuestions.jsx";

import _ from 'lodash';
import {useAuth} from "../Contexts/AuthContexts.jsx";
import {getDatabase, ref, set} from "firebase/database";

const initialState = null;
const reducer = (state, action) => {
    switch (action.type){
        case 'questions':
            action.value.forEach(question => {
                question.options.forEach(option => {
                    option.checked = false;
                });
            });
            return action.value;
        case 'answer':
            const questions = _.cloneDeep(state);
            questions[action.questionID].options[action.optionIndex].checked = action.value;
            return questions;

        default:
            return state;
    }
}

const Quiz = () => {
    const {id} = useParams();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const {loading, error, questions} = useQuestions(id);


    const [qna, dispatch] = useReducer(reducer, initialState);
    const {currentUser} = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        // console.log(questions);
        // at loading we need questions in this page
        dispatch({
            type: 'questions',
            value: questions,
        });

    }, [questions]);

    function handleAnswerChange(event, index){
        dispatch({
            type: 'answer',
            questionID: currentQuestion,
            optionIndex: index,
            value: event.target.checked
        });
    }

    // handle when user clicks the next button
    function nextQuestion(){
         if(currentQuestion < questions.length){
             setCurrentQuestion(prevCurrent => prevCurrent + 1);
         } else{
             console.log('Why this error?');
         }
    }

    // handle when user clicks the previous button
    function prevQuestion(){
         if(currentQuestion > 0 && currentQuestion < questions.length){
             setCurrentQuestion(prevCurrent => prevCurrent - 1);
         } else{
             // console.log('Why this error?');
         }
    }

    // calculate percentage of progress
    const percentage = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

    // handle submit
    async function handleSubmit(){
        const {uid} = currentUser;
        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`);

        await set(resultRef, {
            [id]: qna
        });

        navigate(`/result/${id}`, {
            state: {
                qna
            }
        });
    }
    return (
        <>
            {loading && <div>loading...</div>}
            {error && <div>error...</div>}
            {!loading && !error && qna && qna.length > 0 && (
                <>
                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers
                        options={qna[currentQuestion].options}
                        handleChange={handleAnswerChange}
                        input={true}
                    />
                    <ProgressBar
                        next={nextQuestion}
                        prev={prevQuestion}
                        percentage={percentage}
                        submit={handleSubmit}
                    />
                    <MiniPlayer/>
                </>
            )}
        </>
    );
};

export default Quiz;