import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <ul
        className={isMobile ? "nav-menu active" : "nav-menu"}
        onClick={() => setIsMobile(false)}
      >
        <li className="list drop">Home</li>
        <li className="list">Features</li>
        <li className="list drop">Pages</li>
        <li className="list">Screenshots</li>
        <li className="list">Pricing</li>
        <li className="list">Contact</li>
      </ul>
      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        <i className={isMobile ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
}

export default Navbar;
