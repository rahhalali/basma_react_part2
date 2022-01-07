import React from "react";
import "./Subscribe.css";

function Subscribe() {
  return (
    <div className="container-subscribe">
      <div className="subscribe-title">Subscribe to get updtaes</div>
      <div className="subscribe-desc">
        By subscribing you will get newsletter, promotions adipisicing elit.
        Architecto beatae, dolor sit amet consectetur adipisicing elit.
      </div>
      <input type="text" className="input" placeholder="Enter your email" />
      <button className="subscribe">Subscribe</button>
    </div>
  );
}

export default Subscribe;
