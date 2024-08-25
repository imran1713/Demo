import React from 'react';
import image from '../../assets/images/login.svg';
import Illustration from "../Illustration.jsx";

import LoginForm from "../LoginForm.jsx";

const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration image={image} text={'Login'} />
                <LoginForm />
            </div>
        </>
    );
};

export default Login;