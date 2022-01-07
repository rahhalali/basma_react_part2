import React from "react";
import "./Price.css";
import bicycle from "../../assets/bike.png";
import "./Price.css";
import bike from "../../assets/motorbike.png";

function Price() {
  return (
    <div className="container-price">
      <div className="price-top">
        <div className="price-code">BASMA code Challenge</div>
        <div className="price-line"> </div>
        <div className="price-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className="price-bottom">
        <div className="price-cards">
          <div className="price-card-icon">
            <img src={bicycle} alt="" />
          </div>
          <div className="price-title">BASIC</div>
          <div className="price">
            <span>$</span>49
          </div>
          <div className="price-list-details">
            <ul>
              <li>5GB Linux Web Space</li>
              <li>5 MySQL Databass</li>
              <li>24/7 Tech Support</li>
              <li>Daily Backups</li>
            </ul>
          </div>
          <button className="signup">Sign Up</button>
        </div>

        <div className="price-cards">
          <div className="price-card-icon">
            <img src={bike} alt="" />
          </div>
          <div className="price-title">PRO</div>
          <div className="price">
            <span>$</span>129
          </div>
          <div className="price-list-details">
            <ul>
              <li>10GB Linux Web Space</li>
              <li>50 MySQL Databass</li>
              <li>Unlimited Email</li>
              <li>Daily Backups</li>
            </ul>
          </div>
          <button className="signup">Sign Up</button>
        </div>
      </div>
      <div className="price-contact">
          Not sure what to choose? <a href="#">Contact Us</a>
      </div>
    </div>
  );
}

export default Price;
