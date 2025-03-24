import React from "react";
import { useState, useEffect } from "react";

export default function OrderCard({ product, price, quantity, updateQuantity }) {

  const [productQuantity, setProductQuantity] = useState(quantity);

  const decreaseQuantity = (event) => {
    const newQuantity = Math.max(productQuantity - 1, 0);
    setProductQuantity(newQuantity);
    updateQuantity(newQuantity);
  }

  const increaseQuantity = (event) => {
    const newQuantity = productQuantity + 1;
    setProductQuantity(newQuantity);
    updateQuantity(newQuantity);
  }

  const changeColor = () => {
    if(productQuantity === 0) {
      return { backgroundColor: "grey" };
    }
  }

  const format = (price) => "$ " + price;
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{format(price)}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" style={changeColor()} onClick={decreaseQuantity}>-</div>
        <h4>{productQuantity}</h4>
        <div className="order-button" onClick={increaseQuantity}>+</div>
      </div>
    </div>
  );
}






