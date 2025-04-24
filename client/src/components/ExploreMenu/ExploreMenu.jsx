import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <div className="menu-header">
        <h1>Discover Culinary Delights</h1>
        <p className='explore-menu-text'>
          Journey through our exquisite menu featuring masterfully crafted dishes. 
          We combine premium ingredients with authentic recipes to bring you 
          restaurant-quality meals infused with passion and tradition.
        </p>
      </div>
      
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory(prev => (prev === item.menu_name ? 'All' : item.menu_name))
            }
            key={index}
            className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
          >
            <div className="menu-image-container">
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="menu-image"
              />
              <div className="active-indicator"></div>
            </div>
            <p className="menu-label">{item.menu_name}</p>
          </div>
        ))}
      </div>
      
      
    </div>
  );
};

export default ExploreMenu;