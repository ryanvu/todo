import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'; 
//components
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
//contexts
import { useAuth } from '../../contexts/AuthContext';
//Stylesheets
import './Login.scss';

const Login = () => {
    //states
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [mainErr, setMainErr] = useState('');
    //refs
    const emailRef = useRef();
    const passwordRef = useRef();
    //contexts
    const { logIn } = useAuth();

    const handleLogin = (e) => {
            e.preventDefault();
            const loginInfo = {
                email: emailRef.current.value,
                password: passwordRef.current.value
            }
                if (!emailRef.current.value){
                    setEmailErr("Email address is required!")
                }
                if (!passwordRef.current.value) {
                    setPasswordErr("Password is required!")
                } else {
                emailRef.current.value = "";
                passwordRef.current.value = "";
                setEmailErr("");
                setMainErr("");
                setPasswordErr("");
                logIn(loginInfo);
            }
        }

    return (
        <div className="login">
            <h1>Log In</h1>
            <form onSubmit={handleLogin} className="login__form">
                <Input inputRef={emailRef} label="E-mail" type="email"/>
                {emailErr && <p className="login__err">{emailErr}</p>}
                <Input inputRef={passwordRef} label="Password" type="password"/>
                {passwordErr && <p className="login__err">{passwordErr}</p>}
                <Button kind="submit" text="Log In"/>
                {/* {mainErr && <p className="login__mainErr">{mainErr}</p>} */}
            </form>
            <p className="login__alt">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    )
}


export default Login
