import React from "react";
import { withRouter } from "react-router-dom";

import "./shop-item.styles.scss";

const ShopItems = ({ item, history }) => {
  const { name, imageUrl, price, link } = item;
  return (
    <div
      className="collection-item"
      onClick={() => history.push(`/Product/${link}`)}
    >
      <div className="image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="collection-footer">
        <h4 className="heading">{name.toUpperCase()}</h4>
        <p className="text">Lorem ipsum dolor sit amet.</p>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default withRouter(ShopItems);
