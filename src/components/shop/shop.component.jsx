import React from "react";

import ShopItem from "../shop-item/shop-item.component";

import "./shop.styles.scss";

const Shop = () => {
  const small = "small";
  const medium = "medium";
  const large = "large";

  return (
    <div className="shop">
      <h2 className="title">PRODUCTS</h2>
      <div className="shop-item-content">
        <ShopItem size={small} />
        <ShopItem size={large} />
        <ShopItem size={small} />
        <ShopItem size={medium} />
        <ShopItem size={small} />
      </div>
    </div>
  );
};
export default Shop;
