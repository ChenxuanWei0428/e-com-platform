import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    // Add the product to the cartItems state
  };

  const handleCheckout = () => {
    // Implement the logic for checkout
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.title} - ${item.price}</span>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleCheckout} disabled={cartItems.length === 0}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
