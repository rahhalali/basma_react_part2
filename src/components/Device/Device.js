import React from "react";
import GooglePlay from "../../assets/google-play.png";
import AppStore from "../../assets/app-store.png";
import "./Device.css";

function Device() {
  return (
    <div className="container-device">
      <div className="device">
        <div className="device-title">BASMA is available for all devices</div>
        <div className="device-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor
          fuga rerum adipisci temporibus eligendi ex aliquam quo, assumenda iste
          atque inventore ullam amet perspiciatis! Eos deleniti dolore modi
          accusamus. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="device-image">
          <img src={GooglePlay} alt="" />
          <img src={AppStore} alt="" />
        </div>
        <div className="note">
          * Available on iPhone, iPad and all Android devices
        </div>
      </div>
    </div>
  );
}

export default Device;
