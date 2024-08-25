import React from 'react';
import {NavLink} from "react-router-dom";

const Info = ({to, text, children}) => {
    return (
        <div className="info">
            {text} <NavLink to={to}>{children}</NavLink> instead.
        </div>
    );
};

export default Info;