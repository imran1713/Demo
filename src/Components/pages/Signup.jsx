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
const Signup = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration image={image} text={'Signup'} />
                <Form
                    className={`${classes.signup}`}
                >
                    <TextInput
                        type="text"
                        placeholder="Enter Name"
                        icon={<IoPersonCircleOutline size={25} />}
                    />
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
                    <TextInput
                        type="password"
                        placeholder="Confirm password"
                        icon={<IoLockClosedOutline size={25} />}
                    />
                    <CheckBox
                        text={"I agree to the Term and Condition"}
                    />
                    <Button>
                        <span>Submit Now</span>
                    </Button>
                    <Info href={'login.html'} text={'Already have an account? '}>Login</Info>
                </Form>
            </div>
        </>
    );
};

export default Signup;