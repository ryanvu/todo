import React from 'react'
import { Link } from 'react-router-dom'; 
//components
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
//Stylesheets
import './Login.scss';

const Login = () => {
    return (
        <div className="login">
            <h1>Log In</h1>
            <form className="login__form">
                <Input label="E-mail" type="email"/>
                <Input label="Password" type="password"/>
                <Button text="Log In"/>
            </form>
            <p className="login__alt">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    )
}


export default Login
