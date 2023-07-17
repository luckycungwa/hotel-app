import React from "react";
import "./css/card.css";
import Card from "./Card";
import { useHistory } from "react-router-dom";
import LandingPage from "./LandingPage";

const Rooms = () => {
  const navPage = useHistory();

  // Check if user is signed in, otherwise prompt user to sign in
  

  const handleBooking = () => {
    console.log("Booking reserved");
  };

  return (
    <>
      {/* HERO/ COROUSEL SECTION */}
      <div>
        <LandingPage
          source={"../rooms-vid.mp4"}
          title={"EXPLORE LUXURY COMFORT "}
          subTitle={"YOUR BEST COMFORT"}
          caption={""}
          type={"video/mp4"}
        />

        {/* MAKE THIS A COMPONENT */}
        

        {/* ROOMS CAR SECTION */}

        <div className="card-section center">
        <div className="card-section center wrap-l">
          <br />
          <br />
          <h1 className="title-3">ROOMS & RATES</h1>
          <p className="description">
          Experience true opulence in our Luxury Comfort suite. Immerse yourself in panoramic ocean views from the comfort of your room. Enjoy the lavishness of a plush suite that offers the perfect blend of sophistication and serenity. Let our personalized butler service attend to your every need.
          </p>
          <br />
          <br />
        </div>
          <Card
            features="Ocean view | king-sized bed | private balcony..."
            price="R2500"
            roomType="standard Suite"
            imgUrl="./room0.jpg"
            buttonName="BOOK NOW"
            reviewCount="7 Reviews  | 4.0"
            onClick={handleBooking}
          />
          <Card
            features="Extra-large room with city skyline view | 2 queen-sized beds | work desk..."
            price="R3000"
            roomType="Deluxe XL"
            imgUrl="./bedroom.jpg"
            buttonName="BOOK NOW"
            reviewCount="16 Reviews  | 4.6"
            onClick={handleBooking}
          />
          <Card
            features="Private beach access, 4-poster bed | fully equipped kitchen..."
            price="R3800"
            roomType="Premium Deluxe"
            imgUrl="./room1.jpg"
            buttonName="BOOK NOW"
            reviewCount="9 Reviews  | 3.8"
            onClick={handleBooking}
          />
          <Card
            features="Panoramic ocean views | a plush king-sized bed | jacuzzi bathtub, and butler service..."
            price="R5000"
            roomType="Luxury Comfort"
            imgUrl="./room3.jpg"
            buttonName="BOOK NOW"
            reviewCount="24 Reviews  | 5.0"
            onClick={handleBooking}
          />
          <div className="icon-area">
            
            <button className="btn cta dark-bg"><img className="icon-s invert" src="./right-arrow.png" alt="next"/></button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Rooms;
