import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-overlay"></div>
      <div className="header-content">
        <div className="content-wrapper">
          <h2 className="header-title">
            Savor Culinary Excellence, Delivered to You
          </h2>
          <p className="header-description">
            Embark on a gastronomic journey with our meticulously crafted menu. 
            At FoodXpress, we blend premium ingredients with artisanal expertise 
            to create unforgettable dining experiences. From time-honored classics 
            to innovative fusion creations, each dish is a masterpiece waiting 
            to grace your table.
          </p>
          <button className="cta-button">
            Explore Menu
            <span className="button-icon">→</span>
          </button>
        </div>
      </div>
      <div className="scroll-prompt">
        <div className="mouse-scroll"></div>
      </div>
    </div>
  );
};

export default Header;