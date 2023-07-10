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
        <p className="card-footer">R500 /NIGHT</p>
          <h2 className="title">master suite</h2>
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
          <br />
          <button className="btn bottom">BOOK NOW</button>
          <br/>
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

      <div className="card light-bg">
        <div className="card-img">
          <img src="./room1.jpg" alt="Room 1" className="image" />
        </div>
        <div className="card-info">
          <h2 className="title">premium suite</h2>
          <div className="description">
          <ul>
            <li className="description-list">Hello</li>
            <li className="description-list">Hello</li>
            <li className="description-list">Hello</li>
            <li className="description-list">Hello</li>
          </ul>
            
          </div>
          <br />
          <br />
          <button className="btn">BOOK NOW</button>
        </div>
      </div>

      <div className="card light-bg">
        <div className="card-img">
          <img src="./room0.jpg" alt="Room 1" className="image" />
        </div>
        <div className="card-info">
          <h2 className="title">luxary deluxe</h2>
          <div className="description">
          <ul>
            <li className="description-list">Hello</li>
            <li className="description-list">Hello</li>
            <li className="description-list">Hello</li>
            <li className="description-list">Hello</li>
          </ul>
            
          </div>
          <br />
          <br />
          <button className="btn">BOOK NOW</button>
        </div>
      </div>
    </>
  );
}

export default Card;
