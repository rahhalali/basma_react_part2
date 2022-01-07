import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GetStarted from "../components/GetStarted/GetStarted";
import Challenge from "../components/Challenge/Challenge";
import Tool from "../components/Tool/Tool";
import Share from "../components/Share/Share";
import Code from "../components/Code/Code";
import Price from "../components/Price/Price";
import Device from "../components/Device/Device";
import Subscribe from "../components/Subscribe/Subscribe";
import Contact from "../components/ContactUs/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <GetStarted />
      <Challenge />
      <Tool />
      <Share />
      <Code />
      <Price />
      <Device />
      <Subscribe />
      <Contact />
    </>
  );
}

export default Home;
