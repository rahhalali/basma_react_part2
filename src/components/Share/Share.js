import React from "react";
import thumb2 from "../../assets/thumb-2.png";
import "./Share.css";
import Data from '../Share/Data/Data';

function Share() {
  return (
    <>
      <div className="container-share">
        <div className="share-box">
          <div className="share-left">
            <Data />
          </div>
          <div className="share-right">
            <img src={thumb2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Share;
