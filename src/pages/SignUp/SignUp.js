import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

//contexts
import { useAuth } from '../../contexts/AuthContext';
//components
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

//Stylesheets
import './SignUp.scss';

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPassRef = useRef();

    const { signUp } = useAuth();

    const handleSignUp = (e) => {
        e.preventDefault();
        const signUpInfo = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        if (passwordRef.current.value === confirmPassRef.current.value){
            signUp(signUpInfo);
        } else {
            console.log("Password's do not match")
        }
    };

    return (
        <div className="signup">
            <h1 className="signup__title">Sign Up</h1>
            <form onSubmit={handleSignUp} autoComplete="off" className="signup__form">
                <Input inputRef={emailRef} label="Email" type="email"/>
                <Input inputRef={passwordRef} label="Password" type="password"/>
                <Input inputRef={confirmPassRef} label="Confirm Password" type="password" />
                <Button kind="submit" text="Sign Up"/>
            </form>
            <p className="signup__alt">Already have an account? <Link to="/login">Log In</Link></p>
        </div>
    )
}

export default SignUp
