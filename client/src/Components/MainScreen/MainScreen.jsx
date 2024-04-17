import React from 'react';
import MainScreenNavbar from './Components/MainScreen-Header/MainScreenNavbar';
import MainScreenFirstScreen from './Components/MainScreen-FirstScreen/MainScreenFirstScreen';
import MainScreenAboutUs from './Components/MainScreen-AboutUs/MainScreenAboutUs';
import './MainScreen.css'; // Import the CSS file

const MainScreen = () => {
  return (
    <div className="MainScreen">
      <MainScreenNavbar />
      <MainScreenFirstScreen />
      <MainScreenAboutUs />
    </div>
  );
}

export default MainScreen;
