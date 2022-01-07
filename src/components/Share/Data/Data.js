import React from "react";
import { RiStackFill } from "react-icons/ri";
import { FaBrush } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import "./Data.css";

function Data() {
  return (
    <>
      <div className="share-title">
        <h1>Share your photos with friends easily</h1>
      </div>
      <ul>
        <li>
          <div className="share-icons">
            <RiStackFill />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </li>
        <li>
          <div className="share-icons">
            <FaBrush />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </li>
        <li>
          <div className="share-icons">
            <IoIosWater />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </li>
        <li>
          <div className="share-icons">
            <FaCartArrowDown />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </li>
      </ul>
      <button className="share-button">Learn More</button>
    </>
  );
}

export default Data;
