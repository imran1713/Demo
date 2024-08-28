import React from 'react';
import Summary from "../Summary.jsx";
import Analysis from "../Analysis.jsx";
import {useLocation, useParams} from "react-router-dom";
import useAnswers from "../../Hooks/useAnswers.jsx";
import _ from 'lodash';

const Result = () => {

    const {state} = useLocation() || {};
    const {qna} = state ;

    const {id} = useParams();

    const {loading , error, answers} = useAnswers(id);

    // console.log(answers);
    // console.log(qna);
    function calculate(){
        let score = 0;
        answers.forEach((question, index1) => {
            let correctIndexes = [],
                checkedIndexes = [];
            question.options.forEach((option, index2) => {
                if(option.correct) correctIndexes.push(index2);
                if(qna[index1].options[index2].checked){
                    checkedIndexes.push(index2);
                    option.checked = true;
                }
            });
            if(_.isEqual(correctIndexes, checkedIndexes)){
                score += 5;
            }
        });
        return score;
    }

    return (
        <>
            {loading && <div>Loading...!</div>}
            {error && <div>error...!</div>}
            {!loading && !error && answers && answers.length > 0 && (
                <>
                    <Summary
                        score={calculate()}
                        noq={answers.length}
                    />
                    <Analysis
                        answers={answers}
                    />
                </>
            )}
        </>
    );
};

export default Result;