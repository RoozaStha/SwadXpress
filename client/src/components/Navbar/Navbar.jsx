import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "privacy-policy", label: "Privacy Policy" },
    { id: "contact-us", label: "Contact Us" }
  ];

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={menu === item.id ? "active" : ""}
            onClick={() => setMenu(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <div className="search-container">
          <input
            type="text"
            className={`search-input ${showSearch ? 'active' : ''}`}
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img 
            src={assets.search_icon} 
            alt="Search" 
            className="search-icon" 
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <img
              src={assets.close_icon}
              alt="Close"
              className="close-icon"
              onClick={() => {
                setShowSearch(false);
                setSearchQuery("");
              }}
            />
          )}
        </div>

        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Cart" />
          <div className="dot"></div>
        </div>

        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
