import React from "react";
import "./css/facility.css";

function Facility({ title, imgUrl }) {
  return (
    <>
      <div className="card-section center">
        <div className="card light-bg">
          <img src={imgUrl} alt="corousel" className="card-img" />
          <div className="title-bar glass">
            <h1 className="text-2 white">{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Facility;
