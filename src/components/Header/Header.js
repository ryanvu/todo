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
                <h1 className="header__logo">todo.</h1>
                <ul className="header__nav">
                    <Link className="header__nav-item"><li>HOME</li></Link>
                    <Link className="header__nav-item"><li>LOGIN</li></Link>
                    <Link className="header__nav-item"><li>SIGN UP</li></Link>
                </ul>
                {!showNav ? <img className="header__toggle" onClick={toggle} src={hamburger} alt="hamburger svg"/> : <img className="header__toggle"onClick={toggle} src={close} alt="close svg"/>}
            </div>

            {showNav && 
                <ul className="header__hb">
                    <Link className="header__nav-item"><li>HOME</li></Link>
                    <Link className="header__nav-item"><li>LOGIN</li></Link>
                    <Link className="header__nav-item"><li>SIGN UP</li></Link>
                </ul>}
        </header>
    )
}

export default Header
