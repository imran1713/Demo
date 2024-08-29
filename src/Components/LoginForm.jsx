import React, {useState} from 'react';
import classes from "../styles/Login.module.css";
import TextInput from "./Common/TextInput.jsx";
import {IoLockClosedOutline, IoMailOutline} from "react-icons/io5";
import Button from "./Common/Button.jsx";
import Info from "./Common/Info.jsx";
import Form from "./Common/Form.jsx";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../Contexts/AuthContexts.jsx";


const LoginForm = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = React.useState("");
    
    const navigate = useNavigate();
    const {login} = useAuth();

    async function handleSubmit(e){
        e.preventDefault();

        try{
            setLoading(true);
            setError('');
            await login(username, password);
            navigate('/');

        } catch (e) {
            console.log(e);
            setLoading(false);
            setError(e + 'Failed to login.');
        }
    }

    return (
        <Form
            className={`${classes.login}`}
            onSubmit={handleSubmit}
        >
            <TextInput
                type="text"
                placeholder="Enter email"
                icon={<IoMailOutline size={25} />}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <Button
                type="submit"
                disabled={!username || !password || loading}
            >
                <span>Login</span>
            </Button>
            {error && <p className={"error"}>{error}</p>}

            <Info to={'/signup'} text={'Don\'t have an account? '}>Signup</Info>
        </Form>
    );
};

export default LoginForm;