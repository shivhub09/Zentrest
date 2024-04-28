import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './HomeScreenNavbar.css'

const HomeScreenNavbar = () => {
  // Initialize the useNavigate hook
  const navigate = useNavigate()

  // Function to handle keydown events in the search box
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') { // Check if the pressed key is "Enter"
      const searchQuery = event.target.value // Get the search box value
      if (searchQuery.trim()) {
        
        navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      }
    }
  }

  return (
    <div className="HomeScreenNavbar">
      <div className="logo">ZR</div>

      <div className="ListOfLinks">
        <ul className="items">
          <li className="item">
            <input 
              type="text" 
              className='searchBox' 
              placeholder='Search 🔍' 
              onKeyDown={handleKeyDown} // Attach the event handler
            />
          </li>
          <li className="item"><Link to="/profile">Profile</Link></li>
          <li className="item">Generate</li>
          <li className="item">Feedback</li>
          <li className="logoutbtn">
            <Link to="/"><button type="button">Log Out</button></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeScreenNavbar
