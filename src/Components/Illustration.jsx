import React from 'react';
import classes from '../styles/Illustration.module.css';

const Illustration = ({image, text}) => {
    return (
        <div className={classes.illustration}>
            <img src={image} alt={text}/>
        </div>
    );
};

export default Illustration;