import React, { useState } from "react";
import "./css/card.css";
import "./css/counter.css";
import "../App.css";

const CounterBtn = ({label,}) => {

    const [counter, setCounter] = useState(0);

  // set default minimum & maximum values
  const minValue = 0;
  const maxValue = 9;

  // decrease the value by 1 --
  const increaseNum = () => {
    // check if user has reached maximum value
    if (counter >= 9) {
      console.log("You have reached maximum value");
      setCounter(maxValue);
    } else setCounter(counter + 1);
  };

  // decrease the value by 1 ++
  const decreaseNum = () => {
    // check if the minimum cap value is reached
    if (counter <= 0) {
      console.log("You have reached minimum value");
      setCounter(minValue);
    } else setCounter(counter - 1);
  };

  return (
    <div>
      <div className="counter-container">
        <h2 className="title-2">{label}</h2>

        <div className="icon-area">
          <button className="counter-btn" onClick={decreaseNum}>
            <p className="counter-icon">-</p>
          </button>

          <h2 className="counter-txt">{counter}</h2>

          <button className="counter-btn" onClick={increaseNum}>
            <p className="counter-icon">+</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterBtn;
