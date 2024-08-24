import React from 'react';
import classes from '../styles/Miniplayer.module.css'
// import {FaRegCirclePlay} from "react-icons/fa6";
import {IoMdCloseCircleOutline} from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";
import image from '../assets/images/3.jpg';
const MiniPlayer = () => {
    return (
        <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
            <span className={classes.open}>
                <FaRegCirclePlay color="blue" size={20} />
            </span>
            <span className={classes.close}>
                <IoMdCloseCircleOutline />
            </span>
            {/*the picture is not showing*/}
            <img src={ image } alt="Picture"/>
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
};

export default MiniPlayer;