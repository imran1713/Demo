import React from 'react';
import classes from '../styles/Account.module.css'
import { RiAccountCircleLine } from 'react-icons/ri';
const Account = () => {
    return (
        <div className={classes.account}>
            <RiAccountCircleLine size={25} />
            <a href="signup.html">Signup</a>
            {/*<span className="material-icons-outlined" title="Logout"> logout </span>*/}
        </div>
    );
};

export default Account;