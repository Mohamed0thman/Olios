import React from "react";

import "./shop-icon.styles.scss";


const ShopIcon = ({ collection }) => {
  const {title, icon} = collection
 
  return (
    <li className="item">
      <span className="text">{title}</span>
      <span className={`icon-${icon} icon`}></span>
    </li>
  );
};

export default ShopIcon;
