import React from 'react'
import './LoginScreen.css'
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <div className="LoginScreenContainer">
      <div className="LoginScreenBox">
        <div className="LoginCol1">
          <img src="https://i.pinimg.com/736x/eb/a6/a8/eba6a853efdbeac7a398782d08f8375b.jpg" alt="" srcset="" />
        </div>
        <div className="LoginCol2">
          <div className="LoginScreenTitle">
            LOGIN
          </div>
          <div className="forms">
            <input type="text" name="email" placeholder='Email' id="" />
            <input type="text" name="" id="" placeholder='Password' />
          </div>
          <div className="box3">
            <input className='loginBtn' type="button" value="LOGIN ! " />
            <p>Don't have an account?  <Link to="/register">Create Now! </Link></p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginScreen
