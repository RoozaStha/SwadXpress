import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order Your Favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients. At FoodXpress, we bring you a
          fusion of taste, freshness, and convenience—delivering your favorite
          meals hot and fast, right to your doorstep. Whether you're craving
          traditional comfort food or exploring global flavors, FoodXpress is
          your go-to destination for satisfying every appetite with just a few
          clicks.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
