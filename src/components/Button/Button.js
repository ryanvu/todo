import React from 'react'
import './Button.scss';

const Button = ({text, handleClick, type}) => {
    return (
        <button onClick={handleClick ? handleClick : null}className={type ? `btn__${type}` : 'btn'}>
            {text}
        </button>
    )
}

export default Button
