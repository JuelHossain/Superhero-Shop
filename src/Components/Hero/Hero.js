import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Hero.css'

const Hero = ({hero}) => {
    const { name, superPowers, weapons, price, picture } = hero;
    return (
        <div className='hero-card'>
            <img src={picture} alt={name} />
            <h1 className='name'>{name}</h1>
            <p className='price'>Price: ${price}</p>
            <p className='super-powers'><span>SuperPowers: </span>{superPowers.join(', ')}</p>
            
            <button className='cart-button'>
                <h2>Add to cart</h2>
                <FontAwesomeIcon className='cart-icon' icon={faCartArrowDown}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Hero;