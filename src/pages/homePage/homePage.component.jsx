import React from "react";

import Header from "../../components/header/header.component";
import Slider from "../../components/slider/slider.component";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./homePage.styles.scss";

const HomePage = () => (
  <div className='home-page'>
    <Header />
    <Slider />
  </div>
);
export default HomePage;
