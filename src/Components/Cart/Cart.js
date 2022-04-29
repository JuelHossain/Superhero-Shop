import { faCross, faDeleteLeft, faDotCircle, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({ cartItem,cls,increase,decrease }) => {
  const { picture, name, price, qty } = cartItem;
  return (
    <div className={cls}>
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
              onClick={decrease}
            ></FontAwesomeIcon>
            <p>{qty}</p>
            <FontAwesomeIcon
              className="plus-icon"
              icon={faPlus}
              onClick={increase}
            ></FontAwesomeIcon>
          </div>
          <h3>${qty * price}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;