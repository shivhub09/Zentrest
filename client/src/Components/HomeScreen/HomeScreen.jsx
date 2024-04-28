import React from 'react';
import './HomeScreen.css';
import HomeScreenNavbar from './components/HomeScreen-Navbar/HomeScreenNavbar';
import HomeScreenGallery from './components/HomeScreen-Gallery/HomeScreenGallery';

const HomeScreen = () => {
  return (
    <>
      <HomeScreenNavbar></HomeScreenNavbar>
      <HomeScreenGallery></HomeScreenGallery>
    </>

  );
};

export default HomeScreen;
