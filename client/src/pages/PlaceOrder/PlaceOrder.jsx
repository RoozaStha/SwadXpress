import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here
    navigate("/payment");
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <h2 className="title">Delivery Information</h2>
        
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            required
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            required
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@example.com"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="street">Address</label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Chandragiri"
            required
            value={formData.street}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Kathmandu"
              required
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="NY"
              required
              value={formData.state}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              placeholder="44640"
              pattern="[0-9]{5}"
              required
              value={formData.zip}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Nepal"
              required
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+977 9860942213"
            pattern="[+][0-9]{1,3} [0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="place-order-right">
        <div className="order-summary-card">
          <h3>Order Summary</h3>
          <div className="summary-items">
            <div className="summary-item">
              <span>Subtotal</span>
              <span>₹{getTotalCartAmount().toLocaleString('en-IN')}</span>
            </div>
            <div className="summary-item">
              <span>Delivery Fee</span>
              <span>₹2.00</span>
            </div>
            <div className="summary-item total">
              <span>Total Amount</span>
              <span>
                ₹{(getTotalCartAmount() + 2).toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <div className="payment-options">
            <h4>Secure Payment Methods</h4>
            <div className="payment-icons">
              {/* Add payment method icons here */}
              <span>🔒 SSL Secured Payment</span>
            </div>
          </div>

          <button type="submit" className="payment-button">
            <span>Proceed to Payment</span>
            <span>₹{(getTotalCartAmount() + 2).toLocaleString('en-IN')}</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;