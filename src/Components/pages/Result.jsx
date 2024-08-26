import React from 'react';
import Summary from "../Summary.jsx";
import Analysis from "../Analysis.jsx";



import PrivateRoute from "../PrivateRoute.jsx";

const Result = () => {
    return (
        <div>
            <Summary/>
            <Analysis/>
        </div>
    );
};

export default Result;