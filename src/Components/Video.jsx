import React from 'react';
import classes from "../styles/Video.module.css";
import image from '../assets/images/3.jpg'
import {NavLink} from "react-router-dom";
const Video = ({title, id, noq}) => {
    return (
        <div className={classes.video}>
            <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title}/>
            <p>{title}</p>
            <div className={classes.qmeta}>
                <p>{noq} Questions</p>
                <p>Score : {noq * 5}</p>
            </div>
        </div>

    );
};

export default Video;