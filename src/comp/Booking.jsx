import React from "react";
import "./css/card.css";
import Card from "./Card";
import Book from "./Book";
import Reservation from "./Reservation";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Booking = () => {
  const navPage = useHistory();

  return (
    <>
      <div className="card-section">
        <Book
          features="wifi | ocean view | king-sized bed | private balcony | mini bar"
          price="R250 per night"
          roomType="Deluxe Suite"
          imgUrl="./room0.jpg"
          buttonName="RESERVE"
          overview="Experience luxury and comfort in our Deluxe Suite, offering spacious accommodations with stunning ocean views..."

          onClick={() =>navPage.push("/SuccessPage")}
        />
        <div>
          <Reservation label="children" />
          <Reservation label="adults" />
          <Reservation label="Nights" />
          <Reservation label="Grand total"/>
        </div>
      </div>
    </>
  );
};

export default Booking;
