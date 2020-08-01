import React from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import "./header.styles.scss";

const Header = ({ history }) => {
  return (
    <div className="home-header">
      <div className="text-background">
        <img src="https://i.ibb.co/3YLK9xx/NEWEST.png" alt="background text" />
        <div className="up-text">
          <h1 className="heading">OLIOS</h1>
          <h3 className="text">NEWEST FURNITURE SHOP SITE</h3>
          <CustomButton inverted onClick={() => history.push(`/shop`)}>
            VIEW MORE
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
