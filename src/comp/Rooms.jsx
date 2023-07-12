import React from "react";
import "./css/card.css";
import Card from "./Card";

const Rooms = () => {
  return (
    <>
      <div className="card-section">
        <Card
          features="Spacious room with ocean view"
          price="R300 per night"
          roomType="Deluxe Suite"
          imgUrl="./room0.jpg"
          buttonName="BOOK NOW"
        />
        <Card
          features="Spacious room with ocean view"
          price="R520 per night"
          roomType="Deluxe Suite"
          imgUrl="./room3.jpg"
          buttonName="BOOK NOW"
        />
        <Card
          features="Spacious room with ocean view"
          price="R300 per night"
          roomType="Deluxe Suite"
          imgUrl="./room1.jpg"
          buttonName="BOOK NOW"
        />
        
      </div>
    </>
  );
};

export default Rooms;
