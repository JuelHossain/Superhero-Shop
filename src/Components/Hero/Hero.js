import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Hero.css'

const Hero = ({hero}) => {
    const { name, superPowers, weapons, price, picture } = hero;
    return (
        <div className='hero-card'>
            <img src={picture} alt={name} />
            <h1>{name}</h1>
            <h3>SuperPowers: {superPowers.join(', ')}</h3>
            <h3>Weapons: {weapons.join()}</h3>
            <h2>Price: ${price}</h2>
            <button>
                <h3>Add to cart</h3>
                <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Hero;