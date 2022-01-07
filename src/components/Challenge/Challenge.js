import React from "react";
import "./Challenge.css";
import Content from "./Content/Content";

function Challenge() {
  return (
    <div className="container_feature">
      <div className="feature_top">
        <div className="code">Code Challenge</div>
        <div className="line"> </div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad
          minim veniam.
        </div>
      </div>
      <div className="feature_bottom">
        <Content />
      </div>
    </div>
  );
}

export default Challenge;
