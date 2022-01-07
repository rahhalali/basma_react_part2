import React from "react";
import './Icons.css';
import { BsBellFill } from "react-icons/bs";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";

function Icons() {
  return (
    <>
        <div className="icon-tool">
          <BsBellFill />
        </div>
        <div className="icon-tool">
          <FaEnvelopeOpen />
        </div>
        <div className="icon-tool">
          <FaVideo />
        </div>

    </>
  );
}

export default Icons;
