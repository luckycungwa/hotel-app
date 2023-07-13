import React from "react";
import "./css/card.css";
import Card from "./Card";
import { useHistory } from "react-router-dom";

const Rooms = () => {
  const navPage = useHistory();

  // Check if user is signed in, otherwise prompt user to sign in
  const isSignedIn = false;

  const handleBooking = () => {
    // if user is signed in then reserve booking otherwise user must register
    if (isSignedIn) {
      navPage.push("/SuccessPage");
    } else {
      navPage.push("/Register");
    }
    // tarnery testing
  };

  return (
    <>
      <div className="card-section">
        <Card
          features="Spacious room with ocean view"
          price="R300 per night"
          roomType="Deluxe Suite"
          imgUrl="./room0.jpg"
          buttonName="BOOK NOW"
          onClick={handleBooking}
        />
        <Card
          features="Spacious room with ocean view"
          price="R520 per night"
          roomType="Deluxe Suite"
          imgUrl="./room3.jpg"
          buttonName="BOOK NOW"
          onClick={handleBooking}
        />
        <Card
          features="Spacious room with ocean view"
          price="R300 per night"
          roomType="Deluxe Suite"
          imgUrl="./room1.jpg"
          buttonName="BOOK NOW"
          onClick={handleBooking}
        />
      </div>
    </>
  );
};

export default Rooms;
