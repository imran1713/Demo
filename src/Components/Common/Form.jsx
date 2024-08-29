import React from 'react';
import classes from '../../styles/Form.module.css'
const Form = ({children, className, ...rest}) => {
    return (
        // signup class need to place here
        <form
            className={`${className} ${classes.form}`}
            action="#"
            {...rest}
        >
            {children}
        </form>
    );
};

export default Form;