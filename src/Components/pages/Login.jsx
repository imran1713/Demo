import React from 'react';
import image from '../../assets/images/login.svg'
import classes from "../../styles/Login.module.css";
import Illustration from "../Illustration.jsx";
import Form from "../Form.jsx";
import {IoLockClosedOutline, IoMailOutline, IoPersonCircleOutline} from "react-icons/io5";
import TextInput from "../TextInput.jsx";
import Button from "../Button.jsx";
import Info from "../Info.jsx";

const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration image={image} text={'Login'} />
                <Form
                    className={`${classes.login}`}
                >
                    <TextInput
                        type="text"
                        placeholder="Enter email"
                        icon={<IoMailOutline size={25} />}
                    />
                    <TextInput
                        type="password"
                        placeholder="Enter password"
                        icon={<IoLockClosedOutline size={25} />}
                    />
                    <Button>
                        <span>Login</span>
                    </Button>
                    <Info href={'signup.html'} text={'Don\'t have an account? '}>Signup</Info>
                </Form>
            </div>
        </>
    );
};

export default Login;