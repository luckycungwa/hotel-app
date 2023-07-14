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
          features="Ocean view | king-sized bed | private balcony..."
          price="R250 per night"
          roomType="Deluxe Suite"
          imgUrl="./room0.jpg"
          buttonName="BOOK NOW"
          onClick={handleBooking}
        />
        <Card
          features="Extra-large room with city skyline view | 2 queen-sized beds | work desk..."
          price="R300 per night"
          roomType="Deluxe XL"
          imgUrl="./room3.jpg"
          buttonName="BOOK NOW"
          onClick={handleBooking}
        />
        <Card
          features="Private beach access, 4-poster bed | fully equipped kitchen..."
          price="R300 per night"
          roomType="Deluxe Suite"
          imgUrl="./room1.jpg"
          buttonName="BOOK NOW"
          onClick={handleBooking}
        />
        <Card
          features="Panoramic ocean views | a plush king-sized bed | jacuzzi bathtub, and butler service..."
          price="R500 per night"
          roomType="Luxury Comfort"
          imgUrl="./room1.jpg"
          buttonName="BOOK NOW"
          onClick={handleBooking}
        />
      </div>
    </>
  );
};

export default Rooms;
