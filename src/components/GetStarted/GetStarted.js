import React from "react";
import "./GetStarted.css";
import mobile from "../../assets/thumb-1.png";

function GetStarted() {
  return (
    <div className="container-start">
      <div className="left">
        <div className="polygon"></div>
        <div className="showcase">Creative way to Showcase your App</div>
        <div className="parag">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <button className="btn">Get Started</button>
      </div>
      <div className="right">
        <img src={mobile} alt="" />
      </div>
    </div>
  );
}

export default GetStarted;
