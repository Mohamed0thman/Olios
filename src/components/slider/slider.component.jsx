import React from "react";
import { Carousel } from "react-responsive-carousel";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSlidersForPreview } from "../../redux/directory/directory.selectors";

import SlidersItem from "../sliders-item/sliders-item.component";

import "./slider.style.css";
import "./slider.styles.scss";

const Slider = ({ slider }) => {
  const sliders = slider.map((sliders) => sliders.sliders.map((s) => s));
  console.log(sliders);
  return (
    <div className="slider-container">
      <Carousel
        autoPlay
        showArrows={false}
        useKeyboardArrows={true}
        showThumbs={false}
        showStatus={false}
      >
        {sliders.map((s) => s.map((s) => <SlidersItem item={s} key={s.id} />))}
      </Carousel>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  slider: selectSlidersForPreview,
});

export default connect(mapStateToProps)(Slider);
