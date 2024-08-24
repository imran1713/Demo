import React from 'react';
import classes from '../styles/Account.module.css'
import { RiAccountCircleLine } from 'react-icons/ri';
import {NavLink} from "react-router-dom";
const Account = () => {
    return (
        <div className={classes.account}>
            <RiAccountCircleLine size={25} />
            <NavLink
                to="/signup"
            >
                Signup
            </NavLink>
            {/*<span className="material-icons-outlined" title="Logout"> logout </span>*/}
        </div>
    );
};

export default Account;