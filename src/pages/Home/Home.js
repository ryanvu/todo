import React from 'react'
import { Link } from 'react-router-dom';
//components
import Button from '../../components/Button/Button';
//StyleSheets
import './Home.scss';

//images
import list from '../../assets/images/list.svg';

const Home = () => {
    return (
        <main className="home">
            <div className="home__hero">
                <div className="home__hero-left">
                    <h1 className="home__hero-main">
                        What's sleep? <br/>
                        Keep grinding.</h1>
                    <h2 className="home__hero-content">let's get things done.</h2>
                    <Link className="home__hero-btn"to="/signup"><Button text="Get Started"/></Link>
                </div>
                <img className="home__hero-img"src={list} alt="list svg"/>
            </div>
        </main>
    )
}

export default Home
