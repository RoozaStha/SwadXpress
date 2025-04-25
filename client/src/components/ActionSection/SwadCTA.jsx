import React from 'react';
import { FaClock, FaLeaf, FaWallet, FaUsers, FaShippingFast } from 'react-icons/fa';
import './SwadCTA.css';

const SwadCTA = () => {
  return (
    <section className="swad-cta-section">
      <div className="swad-cta-container">
        <h2 className="swad-cta-title">Why SwadXpress Stands Out?</h2>
        
        <div className="swad-benefits-grid">
          <div className="swad-benefit-card">
            <FaClock className="swad-benefit-icon" />
            <h3>Lightning-Fast Delivery</h3>
            <p>Hot meals delivered in under 30 minutes</p>
          </div>

          <div className="swad-benefit-card">
            <FaLeaf className="swad-benefit-icon" />
            <h3>Fresh & Hygienic</h3>
            <p>Daily prepared with premium ingredients</p>
          </div>

          <div className="swad-benefit-card">
            <FaWallet className="swad-benefit-icon" />
            <h3>Best Value</h3>
            <p>Quality meals at unbeatable prices</p>
          </div>

          <div className="swad-benefit-card">
            <FaUsers className="swad-benefit-icon" />
            <h3>Loved by Foodies</h3>
            <p>Trusted by 10,000+ happy customers</p>
          </div>
        </div>

        <div className="swad-delivery-cta">
          <FaShippingFast className="swad-cta-main-icon" />
          <h2>Hungry? Don't Wait!</h2>
          <p>Get your favorite food delivered in just 30 minutes</p>
          <button className="swad-cta-button">
            Order Now <span className="swad-cta-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SwadCTA;