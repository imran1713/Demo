import React from 'react';
import classes from '../styles/Analysis.module.css';
import Questions from "./Questions.jsx";

const Analysis = ({answers}) => {
    return (
        <div className={classes.analysis}>
            <h1>Question Analysis</h1>
            <Questions answers={answers}/>
        </div>
    );
};

export default Analysis;