import React from 'react';
import Illustration from "../Illustration.jsx";
import Form from "../Form.jsx";
import classes from "../../styles/Signup.module.css";
import TextInput from "../TextInput.jsx";
import CheckBox from "../CheckBox.jsx";
import Button from "../Button.jsx";
import Info from "../Info.jsx";
const Signup = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration/>
                <Form
                    className={`${classes.signup}`}
                >
                    <TextInput
                        type="text"
                        placeholder="Enter Name"
                        icon={'person'}
                    />
                    <TextInput
                        type="text"
                        placeholder="Enter email"
                        icon={'alternate_email'}
                    />
                    <TextInput
                        type="password"
                        placeholder="Enter password"
                        icon={'lock'}
                    />
                    <TextInput
                        type="password"
                        placeholder="Confirm password"
                        icon={'lock_clock'}
                    />
                    <CheckBox
                        text={"I agree to the Term and Condition"}
                    />
                    <Button>Submit Now</Button>
                    <Info href={'login.html'}>Login</Info>
                </Form>

            </div>

        </>
    );
};

export default Signup;