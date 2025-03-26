import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // นำเข้าไฟล์ CSS

const Navbar = () => {
  return (

    <div className="nav-portfolio-section">
      <h1 className="portfolio-title">Portfolio</h1>
    <nav className="navbar">
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/education">Education</Link></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
