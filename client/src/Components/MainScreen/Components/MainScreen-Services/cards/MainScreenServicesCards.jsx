import React from 'react'
import "./MainScreenServicesCards.css"
const MainScreenServicesCards = (props) => {
  return (
    <div id="services" className="ServiceCardContainer">
        <img src={props.imgSrc} alt="" srcset="" />
        <div className="ServiceCard-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        </div>
    </div>
  )
}

export default MainScreenServicesCards
