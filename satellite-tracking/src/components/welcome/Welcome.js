import React from "react";
import Background from "../background/Background";
import Navbar from "../navigation/Navbar";
import "./Welcome.scss";
import image from "../../media/measuring-sky-with-hand.png";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="components">
        <Background />
        <Navbar />
      </div>
      <div className="instructions">
        <div className="home">Home</div>
        <div className="welcome-message-container">
          <div className="message">
            Astronomers measure angles in the sky in degrees, whereby the
            whole universe can be mapped to 360°. Luckily we were born with
            built-in measuring sticks: our hands. <br /> <br /> Holding your arm
            outstretched, raise your little finger: that is apprximately 1°.{" "}
            <br /> <br /> Raise your three middle fingers: that is approximately
            5°. <br /> <br /> A clenched fist is about 10°. <br /> <br /> One
            full hand span is about 25°. <br /> <br /> As a guide, if you know
            how to identify the big-dipper constellation, it is also about 25°
            across. <br /> <br /> See the figure below:
          </div>
        </div>
        <img className="diagram" src={image} alt="measuring the sky" />
      </div>
    </div>
  );
}
