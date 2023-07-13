import React from "react";
import "./css/card.css";
import "../App.css";


const Book = ({ features, price, roomType, imgUrl, buttonName, overview, onClick }) => {
  //page navigation

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
           <p className="">Overview</p>
            <p className="description-list wrap">{overview}</p>
            <br />
            <br />
            <p className="description-list card-footer">{features}</p>
          </div>

          <br />
          <br />
          <button className="btn cta" onClick={onClick}>
            {buttonName}
          </button>
         
        </div>
        <br />
      </div>
    </>
  );
}

export default Book;
