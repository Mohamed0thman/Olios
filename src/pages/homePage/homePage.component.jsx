import React from "react";

import Header from "../../components/header/header.component";
import Carousel from "../../components/slider/slider.component";

import "./homePage.styles.scss";

const HomePage = () => (
  <div className="home-page">
    <Header />
    <Carousel />
  </div>
);
export default HomePage;
