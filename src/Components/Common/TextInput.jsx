import React from 'react';
import classes from "../../styles/TextInput.module.css";
const TextInput = ({icon, ...rest}) => {
    return (
        <div className={classes.textInput}>
            <input {...rest}/>
            {icon}
        </div>
    );
};

export default TextInput;