import {useEffect, useState} from 'react';
import {get, getDatabase, query, ref} from "firebase/database";

const UseQuestions = (videoID) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    function newObj(prevState, snapshot){
        let newObj = [...prevState];
        let titles = [];
        prevState.map(answer => {
            titles.push(answer.title);
        });
        let titleSet = new Set(titles);
        Object.values(snapshot.val()).map(answer => {
            if(!titleSet.has(answer.title)){
                newObj.push(answer);
            }
        });
        return newObj;
    }

    useEffect(() => {
        async function fetchQuestions(){
            // database related works
            const db = getDatabase();
            const quizRef = ref(db, 'quiz/'+ videoID + '/questions');
            const quizQuery = query(
                quizRef
            )

            try{
                setError(false);
                setLoading(true);

                // request from database
                const snapshot = await get(quizQuery);

                setLoading(false);

                if(snapshot.exists()){
                    setQuestions(prevState => {
                        // return [...prevState, ...Object.values(snapshot.val())];
                        return newObj(prevState, snapshot);
                    });
                } else{

                }

            } catch (err){
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        setTimeout(() => {
            fetchQuestions()
                .then(data => {
                    // console.log(data);
                })
                .catch(err => {
                    // console.log(err);
                });
        }, 1000);


    }, [videoID]);

    return {
        loading,
        error,
        questions,
    };
};

export default UseQuestions;