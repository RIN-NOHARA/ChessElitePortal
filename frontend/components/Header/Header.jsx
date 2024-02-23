// Import necessary modules and components
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle, FiLogOut } from "react-icons/fi";
import { FaList, FaRegHeart } from "react-icons/fa";
import { BiCog } from "react-icons/bi";

import "./Header.css";

const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };

  return (
    <>
      <div id="header1" className={menuCollapse ? "collapsed" : ""}>
        <div className="logotext1">
          <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
        </div>
        <div className="closemenu1" onClick={menuIconClick}>
          {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
        </div>

        <div className="sidebar">
          <ul>
            {/* <li>
              <FiHome />
              <Link to="/Aprofile">Profile</Link>
            </li> */}
            <li>
              <FaList />
              <Link to="/CCreate"> Courses</Link>
            </li>
            {/* <li>
              <FaRegHeart />
              <Link to="/CHome">View Courses</Link>
            </li> */}
            {/* <li>
              <BiCog />
              <Link to="/SCreate">Add Student</Link>
            </li> */}
            <li>
              <BiCog />
              <Link to="/SHome">View Student details</Link>
            </li>
            <li>
              <BiCog />
              <Link to="/ICreate">Add Institutions</Link>
            </li>
            <li>
              <BiCog />
              <Link to="/IHome">View Institutions</Link>
            </li>
            <li>
              <FiLogOut />
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
