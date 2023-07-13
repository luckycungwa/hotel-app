import React from "react";
import "./css/card.css";
import "../App.css";
// Import other ccard components

const Card = ({ features, price, roomType, imgUrl, buttonName, onClick  }) => {
  return (
    <>
      <div className="room-card light-bg">
        <div className="card-img">
          <img src={imgUrl} alt={roomType} className="image" />
        </div>
        <div className="card-info">
          <p className="card-footer title">{price}</p>
          <h2 className="title">{roomType}</h2>

          <br />
          <div className="description">
            <p className="description-list">{features}</p>
          </div>

          <br />
          <button className="btn cta">
            {buttonName}
          </button>
          <br />
          <br />
          <div className="icon-area">
            <img src="./dribbble.png" alt="Room 1" className="icon-s" />
            <img src="./dribbble.png" alt="Room 1" className="icon-s" />
            <img src="./dribbble.png" alt="Room 1" className="icon-s" />
            <img src="./dribbble.png" alt="Room 1" className="icon-s" />
            <img src="./dribbble.png" alt="Room 1" className="icon-s" />
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default Card;
