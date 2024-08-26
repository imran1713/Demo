import React, {useState} from 'react';
import classes from '../styles/Account.module.css'
import { RiAccountCircleLine } from 'react-icons/ri';
import {NavLink, useNavigate} from "react-router-dom";
import {IoIosLogOut} from "react-icons/io";
import {useAuth} from "../Contexts/AuthContexts.jsx";
import Button from "./Button.jsx";

const Account = () => {
    const {currentUser} = useAuth();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const {logout} = useAuth();



    const handleLogout = async (e) => {
        e.preventDefault();
        console.log('logout pressed');
        try{
            setLoading(true);
            await logout();
            navigate('/login');
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    // console.log(currentUser);
    return (
        <div className={classes.account}>
            {currentUser ? (<>
                <RiAccountCircleLine size={25}/>
                <span>{currentUser.displayName}</span>
                <Button
                    onClick={handleLogout}
                    disabled={loading}
                >
                    <IoIosLogOut size={25} />
                </Button>
            </>) : (<>
                <NavLink to="/signup">Signup</NavLink>
                <NavLink to="/login">Login</NavLink>
            </>)}

        </div>
    );
};

export default Account;