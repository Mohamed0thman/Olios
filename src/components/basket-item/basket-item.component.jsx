import React from "react";

import "./basket-item.styles.scss";

const BasketItem = ({ item }) => {
  const { name, price, imageUrl, quantity, finalPrice } = item;
  const totalPrice = quantity * price;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${finalPrice} = {totalPrice}
        </span>
      </div>
    </div>
  );
};

export default BasketItem;
