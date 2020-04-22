import React from "react";
import { Carousel } from "react-responsive-carousel";

import "./slider.style.css";
import "./slider.styles.scss";

export default () => (
  <Carousel
    className="slider"
    autoPlay
    showArrows={false}
    useKeyboardArrows={true}
    showThumbs={false}
    showStatus={false}
    cancelable={false}
    
  >
    <div className="image">
      <img
        src="https://i.ibb.co/7C28RKw/slider-1.png"
        alt="slider-1"
        border="0"
      />
    </div>
    <div className="image">
      <img
        src="https://i.ibb.co/FJSHtV6/slider-2.png"
        alt="slider-2"
        border="0"
      />
    </div>
    <div className="image">
      <img
        src="https://i.ibb.co/Vx6fNsD/slider-3.png"
        alt="slider-3"
        border="0"
      />
    </div>
    <div className="image">
      <img
        src="https://i.ibb.co/HXrvT4k/slider-4.png"
        alt="slider-4"
        border="0"
      />
    </div>
    <div className="image">
    <img src="https://i.ibb.co/xFCJc9b/slider-5.png" alt="slider-5" border="0" />
      
    </div>
  </Carousel>
);
