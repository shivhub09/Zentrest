import React from 'react'
import './MainScreenNavbar.css'
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
                <li className="item">Login</li>
            </ul>
        </div>
    </div>
  )
}

export default MainScreenNavbar
