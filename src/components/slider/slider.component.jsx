import React from "react";
import { Carousel } from "react-responsive-carousel";

import "./slider.styles.scss";

const Slider = () => (
  <div className="slider">
    <Carousel
      autoPlay
      showArrows={false}
      useKeyboardArrows={true}
      showThumbs={false}
      showStatus={false}
      cancelable={false}
    >
      <div>
        <img src="https://i.ibb.co/1X9zGTn/slider-1.png" alt="slider-1" />
      </div>
      <div>
        <img src="https://i.ibb.co/CzBWrXT/slider-2.png" alt="slider-2" />
      </div>
      <div>
        <img src="https://i.ibb.co/3BfRj2Q/slider-3.png" alt="slider-3" />
      </div>
      <div>
        <img src="https://i.ibb.co/ZHXjS8X/slider-4.png" alt="slider-4" />
      </div>
      <div>
        <img src="https://i.ibb.co/34wSmLL/slider-5.png" alt="slider-5" />
      </div>
    </Carousel>
  </div>
);
export default Slider;
