import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons library
import './MainScreenContactUs.css';

const MainScreenContactUs = () => {
  return (
    <div className="MainScreenContactUsContainer">
      <div className="MainContactTitle">
        CONTACT US
      </div>

      <div className="Details">
        <div className="ContactPerson">
          <h2>Contact Person</h2>
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="SocialIcons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin  size={30}/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30}/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30}/>
            </a>
          </div>
        </div>

        <div className="ContactPlace">
          <h2>Location</h2>
          <p>Address: 123 Street, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="SocialIcons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30}/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30}/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreenContactUs;
