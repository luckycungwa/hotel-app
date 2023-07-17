import React from "react";
// vieo handlie for reference of ending event
// import { useRef } from "react";
import "./css/landingPage.css";

function LandingPage({title,subTitle, caption, source, type}) {
  // video playback content
  // const videoRef = useRef(null);

  // //play in reverse attempt did not work
  // const handleVideoEnded = () => {
  //   videoRef.current.currentTime = videoRef.current.duration;
  //   videoRef.current.playbackRate = -1;
  //   videoRef.current.autoPlay();
  
  //onEnded={handleVideoEnded}
  // };

  return (
    <>
      <div className="hero">
        
        {/* use video now */}
        <video className="corousel" loop autoPlay muted >
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
