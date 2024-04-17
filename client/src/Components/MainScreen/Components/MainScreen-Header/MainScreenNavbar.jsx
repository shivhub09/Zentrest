import React from 'react';
import './MainScreenNavbar.css';
import { Link } from 'react-router-dom';

const MainScreenNavbar = () => {
  return (
    <div className="MainScreenNavbar">
        <div className="logo">
          ZR
        </div>

        <div className="ListOfLinks">
            <ul className="items">
                <li className="item">Home</li>
                <li className="item">About Us</li>
                <li className="item">Services</li>
                <li className="item">Contact Us</li>
                <li className="item"> <Link to="/login">Login</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default MainScreenNavbar
