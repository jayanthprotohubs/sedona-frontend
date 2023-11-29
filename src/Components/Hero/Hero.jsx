import "./Hero.css";

import React from "react";
import arrow_icon from "../Assets/arrow.png";
import hand_icon from "../Assets/hand_icon.png";
import hero_image from "../Assets/nike.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>WELCOME</h2>
        <div>
          <div className="hero-hand-icon">
            <p>TO</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Sedona</p>
        </div>
        <div
          className="hero-latest-btn"
          onClick={() => {
            const element = document?.getElementById("NewCollections");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
