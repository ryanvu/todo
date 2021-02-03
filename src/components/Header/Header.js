import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Stylesheets
import './Header.scss';

//images
import hamburger from '../../assets/images/hamburger.svg';
import close from '../../assets/images/close.svg';

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    const toggle = () => {
        setShowNav(!showNav);
    }
    return (
        <header className="header">
            <div className="header__wrap">
                <Link className="header__nav-item"to="/"><h1 className="header__logo">todo.</h1></Link>
                <ul className="header__nav">
                    <Link to="/" className="header__nav-item"><li>HOME</li></Link>
                    <Link to="/login" className="header__nav-item"><li>LOGIN</li></Link>
                    <Link to="/signup" className="header__nav-item"><li>SIGN UP</li></Link>
                </ul>
                {!showNav ? <img className="header__toggle" onClick={toggle} src={hamburger} alt="hamburger svg"/> : <img className="header__toggle"onClick={toggle} src={close} alt="close svg"/>}
            </div>

            {showNav && 
                <ul className="header__hb">
                    <Link onClick={toggle} to="/"className="header__nav-item"><li>HOME</li></Link>
                    <Link onClick={toggle} to="/login"className="header__nav-item"><li>LOGIN</li></Link>
                    <Link onClick={toggle} to="/signup"className="header__nav-item"><li>SIGN UP</li></Link>
                </ul>}
        </header>
    )
}

export default Header
