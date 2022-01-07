import React from "react";
import thumb from "../../assets/thumb-2 (1).png";
import "./Tool.css";
import Info from "../Tool/Info/Info";
import Icons from "../Tool/Icons/Icons";

function Tool() {
  return (
    <div className="container-tool">
      <div className="container-box">
        <div className="tool-left">
          <img src={thumb} alt="" />
        </div>
        <div className="tool-right">
          <Info />
          <div className="container-icons">
            <Icons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tool;
