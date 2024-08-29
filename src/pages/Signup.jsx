import React from 'react';
import Illustration from "../Components/Common/Illustration.jsx";
import Form from "../Components/Common/Form.jsx";
import classes from "../styles/Signup.module.css";
import TextInput from "../Components/Common/TextInput.jsx";
import CheckBox from "../Components/Common/CheckBox.jsx";
import Button from "../Components/Common/Button.jsx";
import Info from "../Components/Common/Info.jsx";
import image from '../assets/images/signup.svg';
import { IoLockClosedOutline, IoMailOutline, IoPersonCircleOutline } from 'react-icons/io5';
import SignupForm from "../Components/SignupForm.jsx";
const Signup = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration image={image} text={'Signup'} />
                <SignupForm />
            </div>
        </>
    );
};

export default Signup;