import React from "react";
import "./css/card.css";
import "../App.css";
// Import other ccard components

function Card() {

  return (
    <>
      <div className="card light-bg">
        <div className="card-img">
          <img src="./bedroom.jpg" alt="Room 1" className="image" />
        </div>
        <div className="card-info">
        <p className="card-footer title">R500 /NIGHT</p>
          <h2 className="title">master suite</h2>

          <br />
          <div className="description">
          <ul>
            <li className="description-list">Parking,</li>
            <li className="description-list">Balcony view,</li>
            <li className="description-list">Kitchen,</li>
            <li className="description-list">1 Bathroom,</li>
            <li className="description-list">1 Bedroom,</li>
            <li className="description-list">Wifi</li>
          </ul>
          </div>

          <br />
          <button className="btn cta" onClick="">BOOK NOW</button>
          <br/>
          <br/>
          <div className="icon-area">
        <img src="./dribbble.png" alt="Room 1" className="icon-s" />
        <img src="./dribbble.png" alt="Room 1" className="icon-s" />
        <img src="./dribbble.png" alt="Room 1" className="icon-s" />
        <img src="./dribbble.png" alt="Room 1" className="icon-s" />
        <img src="./dribbble.png" alt="Room 1" className="icon-s" />
        
        </div>
        </div>
        <br/>
        
      </div>

    </>
  );
}

export default Card;
