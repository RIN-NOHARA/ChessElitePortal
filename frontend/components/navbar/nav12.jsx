// Sidebar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiBook,
  FiUsers,
  FiFileText,
  FiInfo,
  FiLogOut,
} from "react-icons/fi";

import "../../styles/side.css";

const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };

  return (
    <div className={`sidebar00 ${menuCollapse ? "collapsed" : ""}`}>
      <div className="logo-container">
        <p className="logo-text">{menuCollapse ? "Logo" : "Big Logo"}</p>
      </div>
      <div className="menu-icon" onClick={menuIconClick}>
        {menuCollapse ? <FiHome /> : <FiLogOut />}
      </div>
      <ul>
        <li>
          <FiHome />
          <Link to="/">Home</Link>
        </li>
        <li>
          <FiBook />
          <Link to="/academy">Academy</Link>
        </li>
        <li>
          <FiBook />
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <FiUsers />
          <Link to="/view">Students course details</Link>
        </li>
        {/* <li>
          <FiFileText />
          <Link to="/form">Form</Link>
        </li> */}
        {/* <li>
          <FiInfo />
          <Link to="/details">Details</Link>
        </li> */}
        <li>
          <FiLogOut />
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
