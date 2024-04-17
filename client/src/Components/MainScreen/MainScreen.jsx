import React from 'react';
import MainScreenNavbar from './Components/MainScreen-Header/MainScreenNavbar';
import MainScreenFirstScreen from './Components/MainScreen-FirstScreen/MainScreenFirstScreen';
import MainScreenAboutUs from './Components/MainScreen-AboutUs/MainScreenAboutUs';
import './MainScreen.css'; // Import the CSS file
import MainScreenServices from './Components/MainScreen-Services/MainScreenServices';
import MainScreenFooter from './Components/MainScreen-Footer/MainScreenFooter';

const MainScreen = () => {
  return (
    <div className="MainScreen">
      <MainScreenNavbar />
      <MainScreenFirstScreen />
      <MainScreenAboutUs />
      <MainScreenServices></MainScreenServices>
      <MainScreenFooter></MainScreenFooter>
    </div>
  );
}

export default MainScreen;
