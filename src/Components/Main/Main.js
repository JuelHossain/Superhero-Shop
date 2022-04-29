import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Hero from "../Hero/Hero";
import "./Main.css";

const Main = () => {
  const [heroes, setHeroes] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setHeroes(data));
  }, []);

  const addToCart = (hero) => {
    const exists = cartItem.find(x => x.id === hero.id);
    if (exists) {
      setCartItem(
        cartItem.map(x => x.id === hero.id ? { ...exists, qty: exists.qty + 1 } : x)
      );
    } else {
      setCartItem([...cartItem, {...hero, qty:1}])
    }
  };

  const removeFromCart = (hero) => {
    const exists = cartItem.find((x) => x.id === hero.id);
    if (exists) {
      setCartItem(
        cartItem.map((x) =>
          x.id === hero.id ? { ...exists, qty: exists.qty - 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...hero, qty: 0 }]);
    }
  }
  return (
    <div className="main-container">
      <div className="hero-container">
        {heroes.map((hero) => (
          <Hero
            key={hero.id}
            hero={hero}
            addToCart={() => addToCart(hero)}
            removeFromCart={()=>removeFromCart(hero)}
          ></Hero>
        ))}
      </div>
      <div className="cart-container">
        <h1>Super Heroes You Selected</h1>
        <div className="cartItems">
          {cartItem.map((item) => (
            <Cart
              key={item.id}
              cartItem={item}>
              
              </Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
