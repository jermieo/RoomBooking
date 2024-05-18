// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          RxHotelApp
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/roomlist" className="nav-links">
              RoomList
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-links">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-links">
              logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
