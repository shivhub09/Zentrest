import React from 'react'
import './RegisterScreen.css';
const RegisterScreen = () => {
  return (
    <div className="RegisterScreenContainer">
    <div className="RegisterScreenBox">
      <div className="RegisterCol1">
        <img src="https://i.pinimg.com/736x/eb/a6/a8/eba6a853efdbeac7a398782d08f8375b.jpg" alt="" srcset="" />
      </div>
      <div className="RegisterCol2">
        <div className="RegisterScreenTitle">
          Register
        </div>
        <div className="forms">
          <input type="text" name="email" placeholder='Name' id="" />
          <input type="text" name="email" placeholder='Email' id="" />
          <input type="text" name="" id="" placeholder='Password'/>
        </div>
        <div className="box3">
        <input className='RegisterBtn'  type="button" value="Register ! " />
        </div>

      </div>
    </div>
  </div>
  )
}

export default RegisterScreen
