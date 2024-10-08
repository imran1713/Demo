import React, {Fragment} from 'react';
import classes from '../styles/Answers.module.css'
import CheckBox from "./Common/CheckBox.jsx";
const Answers = ({options = [], handleChange, input}) => {
    return (
        <div className={classes.answers}>
            {options.map((option, index) => {
                return <Fragment key={index}>
                    {input ? (
                        <CheckBox
                            className={classes.answer}
                            text={option.title}
                            value={index}
                            key={index}
                            checked={option.checked}
                            onChange={e => handleChange(e, index)}
                        />
                    ) : (
                        <CheckBox
                            className={`${classes.answer} ${
                                option.correct 
                                ? classes.correct 
                                : option.checked 
                                    ? classes.wrong 
                                    : null
                            }`}

                            text={option.title}
                            key={index}
                            defaultChecked={option.checked}
                            disabled={true}
                        />
                    )}

                </Fragment>

            })}

        </div>
    );
};

export default Answers;