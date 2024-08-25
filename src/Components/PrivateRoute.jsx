import React from 'react';
import {useAuth} from "../Contexts/AuthContexts.jsx";
import {redirect, Route} from "react-router-dom";

const PrivateRoute = ({path, children, ...rest}) => {
    const {currentUser} = useAuth();
    return  (
        <Route path={path} element={children} {...rest}/>

    )
};

export default PrivateRoute;