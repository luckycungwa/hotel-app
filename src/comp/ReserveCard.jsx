import React, { useState } from "react";
import "./css/card.css";
import "./css/counter.css";
import "../App.css";
import CounterBtn from "./CounterBtn";

const ReserveCard = ({ features, price, roomType, imgUrl, buttonName, onClick }) => {
  return (
    <div className="card-section center">
      {/* ROOM CARD STUFF */}
      <div className="card-section">
        <div className="card light-bg">
          <img src={imgUrl} alt={roomType} className="card-img" />
        </div>
        <div className="col">
          <div>
            <h2 className="title">{roomType}</h2>

            <br />
            <p className="description-list wrap-1center">{features}</p>
          </div>
          <br />
          <br />
          <div className="counter-container row center">
            {/* BUTTONS COMPONENT */}
            {/* <CounterBtn label="Kids" />
            <br />
            <CounterBtn label="Adults" />
            <br />
            <CounterBtn label="Nights" /> */}
            <br />
            <div>
              <p className=" price-text">R {price}</p>{" "}
              <span className="description-list">per single night</span>
            </div>
            <br/>
            <button className="cta btn  text" onClick={onClick}>{buttonName}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveCard;
