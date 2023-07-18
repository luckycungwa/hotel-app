import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addDoc, collection } from "firebase/firestore"; //adding & fetching data functions
import { db } from "../config/firebase";
//adding & fetching data functions
import "./css/card.css";
import "./css/counter.css";
import "../App.css";
// Import other ccard components
import ReserveCard from "./ReserveCard";
import CounterBtn from "./CounterBtn";

const Reservation = () => {
  // collect user data
  const [kids, setKids] = useState("");
  const [adults, setAdults] = useState("");
  const [duration, setDuration] = useState("");
  const [roomType, setRoomType] = useState("");
  // const [total, setTotal] = useState("");
  const navPage = useHistory();

  // const plusKids = total/2;

  // const basePrice = 2500; // Example base price from Card component (you can adjust this value)

  const basePrice = 2500;

  const calculateTotalCost = () => {
    const costPerKid = basePrice / 2;
    const calculatedTotal =
      basePrice + parseInt(kids) * costPerKid * parseInt(duration);
    return calculatedTotal;
    // return newPrice();
  };

  const handleBooking = async () => {
    // Create an object with the reservation data
    // const reservationData = {
    //   room: roomType, // Assuming 'roomType' is a state or prop containing the room type value
    //   kids: kids, // Value from the 'kids' state
    //   adults: adults, // Value from the 'adults' state
    //   duration: duration, // Value from the 'duration' state
    //   price: basePrice, // Assuming 'price' is a prop containing the price value
    //   totalCost: totalCost, // Calculated total cost
    // };

    // Store the reservation data in Firebase Firestore
    try {
      const reservationData = {
        room: roomType,
        kids: kids,
        adults: adults,
        duration: duration,
        price: calculateTotalCost(),
        totalCost: calculateTotalCost(),
      };

      // Store the reservation data in Firebase Firestore
      const docRef = await addDoc(
        collection(db, "Reservations"),
        reservationData
      );

      // Success: Document added successfully
      console.log("Room Reserved Successfully!");

      // Load success page or perform other actions
      navPage.push("/SuccessPage");
    } catch (error) {
      // Error: Failed to add the document
      console.error("Error storing Reservation:", error);

      // You can handle the error here, display an error message, or perform other actions
    }

    // db.collection("reservations")
    //   .add(reservationData)
    //   .then(() => {
    //     console.log("Room Reserved Successfully!");
    //     // Load success page
    //     navPage.push("/SuccessPage");
    //   })
    //   .catch((error) => {
    //     console.error("Error storing reservation:", error);
    //     // You can handle the error here, display an error message, or perform other actions
    //   });
  };

  return (
    <>
      <div className="card-section">
        <ReserveCard
          features="Ocean view | king-sized bed | private balcony..."
          price={calculateTotalCost()}
          roomType="Baisc Room"
          imgUrl="./room0.jpg"
          buttonName="RESERVE ROOM"
          onClick={handleBooking}
        />
      </div>
      <div className="counter-container row center">
        {/* reference the counter value from button and set to newState */}
        <CounterBtn label="Kids" counter={kids} setCounter={setKids} />
        <CounterBtn label="Adults" counter={adults} setCounter={setAdults} />
        <CounterBtn
          label="Nights"
          counter={duration}
          setCounter={setDuration}
        />

        <br />
      </div>
    </>
  );
};

export default Reservation;
