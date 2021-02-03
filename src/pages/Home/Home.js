import React from 'react'

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
                    <h2 className="home__hero-content">let's get things done</h2>
                    <Button text="Get Started"/>
                </div>
                <img className="home__hero-img"src={list} alt="list svg"/>
            </div>
        </main>
    )
}

export default Home
