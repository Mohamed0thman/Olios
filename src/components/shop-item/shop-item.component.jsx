import React from "react";

import "./shop-item.styles.scss";

const ShopItem = ({size}) => (
  <div className="shop-item">
    <div className="content">
      <div className={`image ${size}`}>
        <img src="https://i.ibb.co/7C28RKw/slider-1.png" alt="slider-1" />
      </div>
      <div className="text-content">
        <h3 className="title">title</h3>
        <p className="description">Lorem ipsum dolor sit amet.</p>
        <span className="price">$50</span>
      </div>
    </div>
  </div>
);

export default ShopItem;
