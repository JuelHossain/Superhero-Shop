import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import './Main.css'

const Main = () => {
    const [heroes, setHeroes] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setHeroes(data));
    }, []);
    return (
        <div className='main-container'>
            <div className="hero-container">
                {
                    heroes.map(hero => <Hero key={hero.id}
                    hero={hero}
                    ></Hero>)
                }
            </div>
            <div className="cart-container">
                <h3>This is for cart</h3>
            </div>
        </div>
    );
};

export default Main;