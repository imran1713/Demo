import React, {useRef, useState} from 'react';
import classes from '../styles/Miniplayer.module.css'
// import {FaRegCirclePlay} from "react-icons/fa6";
import {IoMdCloseCircleOutline} from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";
import image from '../assets/images/3.jpg';
const MiniPlayer = () => {
    const buttonRef = useRef();
    const [status, setStatus] = useState(false);

    function toggleMiniPlayer(){
        if(!status) {
            buttonRef.current.classList.remove(classes.floatingBtn);
            setStatus(true);
        } else{
            buttonRef.current.classList.add(classes.floatingBtn);
            setStatus(false);
        }
    }

    return (
        <div
            className={`${classes.miniPlayer} ${classes.floatingBtn}`}
            ref={buttonRef}
            onClick={toggleMiniPlayer}
        >
            <span
                className={classes.open}
            >
                <FaRegCirclePlay color="blue" size={20} />
            </span>

            <span
                className={classes.close}
                onClick={toggleMiniPlayer}
            >
                <IoMdCloseCircleOutline size={25} />
            </span>
            {/*the picture is not showing*/}
            <img src={ image } alt="Picture"/>
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
};

export default MiniPlayer;