import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './HomeScreenNavbar.css'

const HomeScreenNavbar = () => {
  const navigate = useNavigate()

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const searchQuery = event.target.value 
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
              onKeyDown={handleKeyDown} 
            />
          </li>
          <li className="item"><Link to="/profile">Profile</Link></li>
          <li className="item"><Link to="/createPost">Create</Link></li>
          <li className="item"><Link to="/browsePost">Browse</Link></li>
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
