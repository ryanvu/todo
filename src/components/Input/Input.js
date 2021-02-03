import React from 'react'

//stylesheets
import './Input.scss';

const Input = ({label, type, inputRef}) => {
    return (
        <div className="input">
            <label className="input__label" htmlFor={label}>{label}</label>
            <input ref={inputRef} className="input__input" type={type ? type : "text"} />
        </div>
    )
}

export default Input
