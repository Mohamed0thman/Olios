import React from "react";

import "./basket-icon.styles.scss";

const BasketIcon = ({ handelChange, handelChangeToBasketMenu }) => (
  <div
    className="basket-icon"
    onClick={() => {
      handelChange();
      handelChangeToBasketMenu();
    }}
  >
    <span className="icon-basket icon"></span>
    <span className="item-count"></span>
  </div>
);
export default BasketIcon;
