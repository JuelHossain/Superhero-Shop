import { faCross, faDeleteLeft, faDotCircle, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({ cartItem }) => {
  const { picture, name, price,qty } = cartItem;
  return (
    <div>
      <div className="cartItem">
        <div className="info">
          <img src={picture} alt={name} />
          <h3>{name}</h3>
        </div>

        <div className="price">
          <div className="quantity">
            <FontAwesomeIcon
              className="minus-icon"
              icon={faMinus}
            ></FontAwesomeIcon>
            <p>{qty}</p>
            <FontAwesomeIcon
              className="plus-icon"
              icon={faPlus}
            ></FontAwesomeIcon>
          </div>
          <h3>${qty * price}</h3>
        </div>
      </div>
      <div className="random-choose"></div>
    </div>
  );
};

export default Cart;