import React from 'react'

//stylesheets
import './Input.scss';

const Input = ({label, type}) => {
    return (
        <div className="input">
            <label className="input__label" htmlFor={label}>{label}</label>
            <input className="input__input" type={type ? type : "text"}/>
        </div>
    )
}

export default Input
