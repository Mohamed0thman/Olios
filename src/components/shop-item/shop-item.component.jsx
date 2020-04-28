import React from "react";

import "./shop-item.styles.scss";

const ShopItems = ({ item, size }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className={`item--${size}`}>
      <div className="image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="text-content">
        <h3 className="heading">{name}</h3>
        <p className="text">Lorem ipsum dolor sit amet.</p>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default ShopItems;
