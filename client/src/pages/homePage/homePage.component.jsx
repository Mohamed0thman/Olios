import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSlidersStart } from "../../redux/directory/directory.action";

import Header from "../../components/header/header.component";
import Slider from "../../components/slider/slider.component";

import "./homePage.styles.scss";

const HomePage = ({ fetchSlidersStart }) => {
  useEffect(() => {
    fetchSlidersStart();
  }, [fetchSlidersStart]);

  return (
    <div className="home-page">
      <div className="container">
        <Header />
        <Slider />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchSlidersStart: () => dispatch(fetchSlidersStart()),
});

export default connect(null, mapDispatchToProps)(HomePage);
