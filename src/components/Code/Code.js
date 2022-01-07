import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import download from "../../assets/download.png";
import setup from "../../assets/settings.png";
import enjoy from "../../assets/app.png";
import "./Code.css";
function Code() {
  return (
    <>
      <div className="container-code">
        <div className="code-top">
          <div className="code-title">Code Challenge</div>
          <div className="code-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className="code-bottom">
          <div className="code-bottom-first">
            <div className="code-bottom-icons">
              <img src={download} alt="" />
            </div>
            <div className="code-bottom-text">Install the App</div>
            <div className="code-bottom-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="arrow">
            <MdOutlineArrowForwardIos />
          </div>
          <div className="code-bottom-second">
            <div className="code-bottom-icons">
              <img src={setup} alt="" />
            </div>
            <div className="code-bottom-text">Setup your profile</div>
            <div className="code-bottom-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="arrow">
            <MdOutlineArrowForwardIos />
          </div>
          <div className="code-bottom-third">
            <div className="code-bottom-icons">
              <img src={enjoy} alt="" />
            </div>
            <div className="code-bottom-text">Enjot the features!</div>
            <div className="code-bottom-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Code;
