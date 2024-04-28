import React from 'react'
import { Link } from 'react-router-dom'
import './HomeScreenNavbar.css'
const HomeScreenNavbar = () => {
  return (
    <div className="HomeScreenNavbar">
        <div className="logo">
          ZR
        </div>

        <div className="ListOfLinks">
            <ul className="items">
                <li className="item">Home</li>
                <li className="item">About Us</li>
                <li className="item">Services</li>
                <li className="item">Contact Us</li>
                <li className="logoutbtn"> <Link to="/"><button type="button">LogOut</button></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default HomeScreenNavbar
