import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import  '../Acss/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
  <Link to="/about-us" className="nav-link">About Us</Link>
      <Link to="/academics" className="nav-link">Academics</Link>
      <Link to="/admissions" className="nav-link">Admissions</Link>
      <Link to="/contact-us" className="nav-link">Contact Us</Link>
      <Link to="/faculty" className="nav-link">Faculty</Link>
      <Link to="/gallery" className="nav-link">Gallery</Link>
      <Link to="/students" className="nav-link">Students</Link>
    </nav>
  );
};

export default Navbar;

