import React, {useRef, useState} from 'react';
import classes from '../styles/ProgressBar.module.css'
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import Button from "./Common/Button.jsx";

const ProgressBar = ({
                         next,
                         prev,
                         submit,
                         percentage}) => {

    const [tooltip, setTooltip] = useState(false);
    const tooltipRef = useRef();

    function toggleTooltip(){
        if(tooltip){
            setTooltip(false);
            tooltipRef.current.style.display = 'none';
        } else{
            setTooltip(true);
            tooltipRef.current.style.left = `calc${percentage}% - 65px`;
            tooltipRef.current.style.display = 'block';
        }
    }

    return (
        <div className={classes.progressBar}>
            <div
                className={classes.backButton}
                onClick={prev}
            >
                <FaArrowLeft />
            </div>

            <div className={classes.rangeArea}>
                <div
                    className={classes.tooltip}
                    ref={tooltipRef}
                    // onMouseOver={toggleTooltip}
                    // onMouseOut={toggleTooltip}

                >
                    `${percentage}%` Complete!
                </div>
                <div className={classes.rangeBody}>
                    <div
                        className={classes.progress}
                        style={{width: `${percentage}%`}}
                    >

                    </div>

                </div>
            </div>


            <Button
                className={classes.next}
                onClick={percentage === 100 ? submit: next}
            >
                <span>{percentage === 100 ? 'submit': 'Next Question'}</span>
                <FaArrowRight/>
            </Button>

        </div>
    );
};

export default ProgressBar;