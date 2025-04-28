import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <div className="cart-items-header">
          <p className="header-item"> Product</p>
          <p className="header-item">Price</p>
          <p className="header-item">Quantity</p>
          <p className="header-item">Total</p>
          <p className="header-item">Actions</p>
        </div>
        
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-item-card" key={item._id}>
                <div className="item-details">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-info">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-category">{item.category}</p>
                  </div>
                </div>
                <p className="item-price">₹{item.price}</p>
                <div className="quantity-container">
                  <span className="quantity">{cartItems[item._id]}</span>
                </div>
                <p className="item-total">₹{(item.price * cartItems[item._id]).toFixed(2)}</p>
                <button 
                  onClick={() => removeFromCart(item._id)} 
                  className="remove-button"
                >
                  ✕
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-summary">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{getTotalCartAmount().toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>₹2.00</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{(getTotalCartAmount() + 2).toFixed(2)}</span>
            </div>
          </div>
          <button 
            onClick={() => navigate('/order')} 
            className="checkout-button"
          >
            Proceed to Checkout
          </button>
        </div>

        <div className="promo-section">
          <h3>Apply Promo Code</h3>
          <div className="promo-input-container">
            <input 
              type="text" 
              placeholder="Enter promo code" 
              className="promo-input"
            />
            <button className="promo-button">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;