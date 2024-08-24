import React from 'react';
import Answers from "./Answers.jsx";
import classes from '../styles/Question.module.css';
import {IoMdHelpCircleOutline} from "react-icons/io";

const Question = () => {
    return (
        <div className={classes.question}>
            <div className={classes.qtitle}>
                <IoMdHelpCircleOutline size={25}/>
                Here goes the question from Learn with Sumit?
            </div>
            <Answers />
        </div>
    );
};

export default Question;