import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);


  const total = () => {
    return orders.reduce((acc, order) => acc + order.price * order.quantity, 0);
  };
    
  // Update the quantity of a specific order in the orders array
  const updateQuantity = (index, newQuantity) => {
    const updatedOrders = [...orders];
    updatedOrders[index].quantity = newQuantity;
    setOrders(updatedOrders);
  };


  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) =>
          <OrderCard 
            key={index}
            product={order.product} 
            price={order.price} 
            quantity={order.quantity} 
            updateQuantity={(newQuantity) => updateQuantity(index, newQuantity)}>
          </OrderCard>
      )}
      </div>

      <CheckoutButton total={total()}></CheckoutButton>
    </>
  );
}
