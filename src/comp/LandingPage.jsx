import React from "react";
// vieo handlie for reference of ending event
import { useRef } from "react";
import "./css/landingPage.css";

function LandingPage({title,subTitle, caption, source, type}) {
  // video playback content
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    videoRef.current.currentTime = videoRef.current.duration;
    videoRef.current.playbackRate = -1;
    videoRef.current.autoPlay();
  };

  return (
    <>
      <div className="hero">
        {/* <img
          src="./bg02.jpg"
          alt="corousel"
          className="corousel"
        /> */}

        {/* use video now */}
        <video className="corousel" loop autoPlay muted onEnded={handleVideoEnded}>
          <source src={source} type={type} alt="corousel" />
        </video>

        <div className="overlay">
        </div>
        <div className="hero-text center">
          <h2 className="title-2 white">{subTitle}</h2>
          <p className="title-display white">{title}</p>

          <p className="title white ">{caption}</p>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
