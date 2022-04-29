import React, { useEffect, useState } from "react";
import randomNumber from "../../utilites/random";
import Cart from "../Cart/Cart";
import Error from "../Error/Error";
import Hero from "../Hero/Hero";
import "./Main.css";

const Main = () => {
  const [heroes, setHeroes] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [choosed, setchoosed] = useState([]);
  const [error, setError] = useState("");
  const [cls, setCls] = useState('display-none');

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setHeroes(data));
  }, []);

  const addToCart = (hero) => {
    const exists = cartItem.find((x) => x.id === hero.id);
    if (exists) {
      setCartItem(
        cartItem.map((x) =>
          x.id === hero.id ? { ...exists, qty: exists.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...hero, qty: 1 }]);
    }
  };
  const removeFromCart = (hero) => {
    const exists = cartItem.find((x) => x.id === hero.id);
    if (exists.qty===1) {
      setCartItem(cartItem.filter(x => x.id !== hero.id));
      setCls("display-none");
    } else {
      setCartItem(
        cartItem.map((x) =>
          x.id === hero.id ? { ...exists, qty: exists.qty - 1 } : x
        )
      );
      
    }
  }
  const randomChoose = (randomIndex) => {
    if (cartItem.length < 2) {
      setError(
        "!Please Add at least two product in the cart and try again"
      );
    } else {
      setchoosed(cartItem[randomIndex]);
      setError("");
      setCls('')
    }
  };
  const randomIndex = randomNumber(0, cartItem.length - 1);
  return (
    <div className="main-container">
      <div className="hero-container">
        {heroes.map((hero) => (
          <Hero
            key={hero.id}
            hero={hero}
            addToCart={() => addToCart(hero)}
          ></Hero>
        ))}
      </div>
      <div className="cart-container">
        <h1>Super Heroes You Selected</h1>
        <div className="cartItems">
          {cartItem.map((item) => (
            <Cart
              key={item.id}
              cartItem={item}
              increase={() => addToCart(item)}
              decrease={() => removeFromCart(item)}
            ></Cart>
          ))}
        </div>
        <div className="cart-btn-container" id="cart-btn">
          <button
            className="cart-btn"
            onClick={() => {
              randomChoose(randomIndex);
            }}
          >
            Choose One For Me
          </button>
          <button className="cart-btn">Checkout</button>
        </div>
        <div className="randomly-choosed">
          <h1 className={cls}> We choosed this For You</h1>
          <Error error={error}></Error>
          <Cart
            cartItem={choosed}
            cls={cls}
            increase={() => addToCart(choosed)}
            decrease={() => removeFromCart(choosed)}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Main;
