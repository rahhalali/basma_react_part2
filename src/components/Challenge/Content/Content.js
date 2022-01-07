import React from "react";
import './Content.css';
import { MdOutlineTouchApp } from "react-icons/md";
import { IoFingerPrintOutline } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";

function Content() {
  return (
    <>
      <div className="box">
        <div className="icon">
          <MdOutlineTouchApp />
        </div>
        <div className="full"> Fully functional </div>
        <div className="parag">
          Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua sit amet, consectetur.
        </div>
      </div>

      <div className="box">
        <div className="icon">
          <IoFingerPrintOutline />
        </div>
        <div className="full"> Fully functional </div>
        <div className="parag">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className="box">
        <div className="icon">
          <MdOutlineCheckBoxOutlineBlank />
        </div>
        <div className="full"> Fully functional </div>
        <div className="parag">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className="box">
        <div className="icon">
          <HiOutlineLocationMarker />
        </div>
        <div className="full"> Location Tracking </div>
        <div className="parag">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua..
        </div>
      </div>
      <div className="box">
        <div className="icon">
          <FiSettings />
        </div>
        <div className="full"> Powerful Settings </div>
        <div className="parag">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className="box">
        <div className="icon">
          <BsGlobe2 />
        </div>
        <div className="full"> Multiple Language </div>
        <div className="parag">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </>
  );
}

export default Content;
