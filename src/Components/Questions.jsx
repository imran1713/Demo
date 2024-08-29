import React from 'react';
import Answers from "./Answers.jsx";
import classes from '../styles/Question.module.css';
import {IoMdHelpCircleOutline} from "react-icons/io";

const Questions = ({answers=[]}) => {

    return answers.map((answer, index) => {
        return <div
            className={classes.question}
            key={index}
        >
            <div className={classes.qtitle}>
                <IoMdHelpCircleOutline size={25}/>
                {answer.title}
            </div>
            <Answers
                options={answer.options}
                input={false}
            />
        </div>
    })
};

export default Questions;