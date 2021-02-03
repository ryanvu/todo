import React, { useRef } from 'react'
import { Link } from 'react-router-dom'; 
//components
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
//Stylesheets
import './Login.scss';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();
        const loginInfo = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        console.log(loginInfo);
        if(!emailRef.current.value || !passwordRef.current.value){
            console.log("No empty fields!")
        }
    }
    return (
        <div className="login">
            <h1>Log In</h1>
            <form className="login__form">
                <Input inputRef={emailRef} label="E-mail" type="email"/>
                <Input inputRef={passwordRef} label="Password" type="password"/>
                <Button handleClick={handleLogin} text="Log In"/>
            </form>
            <p className="login__alt">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    )
}


export default Login
