import React, { useState } from "react";
import "./css/card.css";
import "../App.css";
// Imports for ratings

const Card = ({
  features,
  price,
  roomType,
  imgUrl,
  buttonName,
  onClick,
  reviewCount,
}) => {
  //Ternary stateement to manage star rating and boookmark
  const [isRated, setIsRated] = useState(false); //bookmark is jnot filled by default
  const [rating, setRating] = useState(null); //star is jnot filled by default

  const handleRating = () => {
    // alternate between
    setIsRated(!isRated);
  };

  const Stars = (index) => {
    // star rating comtents
    const starValue = index + 1;

    return (
      <>
        <button
          className="unbutton"
          title={starValue}
          onClick={() => setRating(console.log("Star value is:" + starValue))}
        >
          <span className="star">&#9733;</span>
        </button>
      </>
    );
  };

  return (
    <>
      <div className="room-card light-bg">
        <div className="card-img">
          <img src={imgUrl} alt={roomType} className="image left" />
        </div>

        <div className="card-info">
          <button className=" cta unbutton bookmark" onClick={handleRating}>
            {!isRated ? (
              <img src="./bookmark.png" alt="unmarked" className="anim-icon" />
            ) : (
              <img
                src="./bookmark-fill.png"
                alt="bookmarked"
                className="anim-icon"
              />
            )}
          </button>

          <h2 className="title">{roomType}</h2>

          <br />
          <div className="description center">
            <p className="description-list wrap-1">{features}</p>
          </div>

          <br />

          {/* call to action button */}
          <div className="icon-area">
            <button className="btn cta" onClick={onClick}>{buttonName}</button>
          </div>
          <br />
          <div className="icon-area">
            {/* Ratings components | display an array of stars (5) */}
            {[...Array(5)].map(Stars)}
          </div>
          <br />
          <p className="card-footer title">{reviewCount}</p>
          <div className="price-tag">
            <p className=" price-text"> {price}</p> per single night
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
