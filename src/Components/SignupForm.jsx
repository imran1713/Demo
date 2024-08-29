import React, {useState} from 'react';
import classes from "../styles/Signup.module.css";
import TextInput from "./Common/TextInput.jsx";
import {IoLockClosedOutline, IoMailOutline, IoPersonCircleOutline} from "react-icons/io5";
import CheckBox from "./Common/CheckBox.jsx";
import Button from "./Common/Button.jsx";
import Info from "./Common/Info.jsx";
import Form from "./Common/Form.jsx";
import {useNavigate} from "react-router-dom";

import { useAuth } from "../Contexts/AuthContexts.jsx";

const SignupForm = () => {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [agree, setAgree] = React.useState("");

    const [error, setError] = React.useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const {signup} = useAuth();


    async function handleSubmit(e){
        e.preventDefault();

        // do validation
        if(password !== confirmPassword){
            return setError("Passwords do not match");
        }

        try{
            setLoading(true);
            setError('');
            await signup(email, password, username);
            navigate('/');

        } catch (err) {
            console.log(err);
            setLoading(false);
            setError(err + 'Failed to sign up.');
        }

    }

    return (
        <Form
            className={`${classes.signup}`}
            onSubmit={handleSubmit}
        >
            <TextInput
                type="text"
                placeholder="Enter Name"
                icon={<IoPersonCircleOutline size={25} />}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required={true}
            />

            <TextInput
                type="text"
                placeholder="Enter email"
                icon={<IoMailOutline size={25} />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
            />
            <TextInput
                type="password"
                placeholder="Enter password"
                icon={<IoLockClosedOutline size={25} />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
            />
            <TextInput
                type="password"
                placeholder="Confirm password"
                icon={<IoLockClosedOutline size={25} />}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required={true}
            />
            <CheckBox
                text={"I agree to the Term and Condition"}
                value={agree}
                onChange={(e) => setAgree(e.target.value)}
                required={true}
            />
            <Button
                type="submit"
                disabled={loading}
            >
                <span>Submit Now</span>
            </Button>

            {error && <p className={'error'}>{error}</p>}

            <Info to={'/login'} text={'Already have an account? '}>Login</Info>
        </Form>
    );
};

export default SignupForm;