import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  // Update active menu when route changes
  React.useEffect(() => {
    const path =
      location.pathname === "/" ? "home" : location.pathname.slice(1);
    setMenu(path);
  }, [location.pathname]);

  const menuItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "menu", label: "Menu", path: "/menu" },
    { id: "privacy-policy", label: "Privacy Policy", path: "/privacy-policy" },
    { id: "contact-us", label: "Contact Us", path: "/contact-us" },
  ];

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li key={item.id} className={menu === item.id ? "active" : ""}>
            <Link to={item.path} className="nav-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <div className="search-container">
          <input
            type="text"
            className={`search-input ${showSearch ? "active" : ""}`}
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
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
