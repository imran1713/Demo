import React from 'react';
import classes from '../styles/ProgressBar.module.css'
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import Button from "./Button.jsx";

const ProgressBar = () => {
    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton}>
                <FaArrowLeft />
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip}>24% Complete!</div>
                <div className={classes.rangeBody}>
                    <div className={classes.progress} style={{width: "20%"}}></div>

                </div>
            </div>
            <a href="result.html">
                <Button className={classes.next}>
                    <span>Next Question</span>
                    <FaArrowRight/>
                </Button>
            </a>
        </div>
    );
};

export default ProgressBar;