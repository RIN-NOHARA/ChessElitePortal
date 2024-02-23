// Navbar.jsx
import React, { useState } from 'react';
import menuItems from './MenuItems';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="primary-navbar">
      <h1 className="primary-navbar-logo">Magnus</h1>
      <div className="primary-menu-icon" onClick={handleClick}>
        <i className={active ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={active ? 'primary-nav-menu active' : 'primary-nav-menu'}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url} className="primary-nav-links">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
