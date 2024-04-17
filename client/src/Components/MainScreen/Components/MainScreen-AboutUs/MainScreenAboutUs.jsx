import React from 'react'
import './MainScreenAboutUs.css'
const MainScreenAboutUs = () => {
  return (
    <div className="AboutUsContainer">
      <div className="AboutUsTitle">
        <h1>ABOUT US</h1>
      </div>

      <div className="AboutUsContent">
        <div className="AboutUsImages">
          <img src="https://i.pinimg.com/564x/25/7c/66/257c66c72e969ecea6e052661897ddb2.jpg" alt="" srcset="" />
          <img src="https://wl-brightside.cf.tsp.li/resize/728x/webp/b8e/918/96512755e1a8eee84759a36073.jpg.webp" alt="" srcset="" />
          <img src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/850/16d/58fc30565a81bd2e26fb139f94.jpg" alt="" srcset="" />
        </div>
        <div className="AboutUsPara">
          <p>
            Welcome to PinIt-Genz, the ultimate hub where Gen Z creativity thrives! We've revolutionized visual discovery, combining the essence of Pinterest with a sleek, Gen Z-centric interface. Our platform is designed to effortlessly capture your imagination, offering intuitive navigation and an immersive experience tailored to your dynamic preferences.
          </p>

          <p>
            But we're not just another pinboard – we're pioneers in AI-generated imagery, empowering users to explore limitless creativity. With PinIt-Genz, you can curate mood boards, brainstorm for projects, and spark inspiration like never before. Join our vibrant community and embark on a journey of boundless visual exploration. At PinIt-Genz, the future of creativity is in your hands. Discover, save, and create – all in one place. Welcome to the next generation of visual discovery. Welcome to PinIt-Genz.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainScreenAboutUs
