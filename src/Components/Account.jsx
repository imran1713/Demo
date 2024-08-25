import React from 'react';
import classes from '../styles/Account.module.css'
import { RiAccountCircleLine } from 'react-icons/ri';
import {NavLink} from "react-router-dom";
import {IoIosLogOut} from "react-icons/io";
import {useAuth} from "../Contexts/AuthContexts.jsx";

const Account = () => {
    const {currentUser} = useAuth();
    // const {displayName} = currentUser;
    console.log(currentUser);
    return (
        <div className={classes.account}>
            {currentUser ? (<>
                <RiAccountCircleLine size={25}/>
                <span>{currentUser.displayName}</span>
                <IoIosLogOut size={25} />
            </>) : (<>
                <NavLink to="/signup">Signup</NavLink>
                <NavLink to="/login">Login</NavLink>

            </>)}

        </div>
    );
};

export default Account;