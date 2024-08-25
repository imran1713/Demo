import React from 'react';
import Illustration from "../Illustration.jsx";
import Form from "../Form.jsx";
import classes from "../../styles/Signup.module.css";
import TextInput from "../TextInput.jsx";
import CheckBox from "../CheckBox.jsx";
import Button from "../Button.jsx";
import Info from "../Info.jsx";
import image from '../../assets/images/signup.svg';
import { IoLockClosedOutline, IoMailOutline, IoPersonCircleOutline } from 'react-icons/io5';
import SignupForm from "../SignupForm.jsx";
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