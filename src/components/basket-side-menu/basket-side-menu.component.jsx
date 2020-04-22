import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./basket-side-menu.styles.scss";

const BasketSideMenu = () => (
  <div className="basket-side-menu">
    <h1 className="title">BASKET</h1>
    <div className="basket-items"></div>
    <CustomButton children={"Checkout"} />
  </div>
);
export default BasketSideMenu;
