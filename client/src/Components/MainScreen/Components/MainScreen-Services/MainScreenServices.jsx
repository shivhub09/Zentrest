import React from 'react';
import './MainScreenServices.css';
import services from "./data/services.json";
import MainScreenServicesCards from './cards/MainScreenServicesCards';

const MainScreenServices = () => {
  return (
    <div className="MainScreenServicesContainer">
        <div className="MainScreenServicesTitle">
            SERVICES
        </div>
        <div className="ServicesSliderContainer">
            {services.map((data) => (
                <MainScreenServicesCards
                    key={data.title} // Don't forget to add a unique key
                    imgSrc={data.imgSrc}
                    title={data.title}
                    description={data.description}
                />
            ))}
        </div>
    </div>
  )
}

export default MainScreenServices;
