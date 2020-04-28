import React from "react";

import AllCategories from "../../components/all-categories/all-categories.component";

import "./shop.styles.scss";

const Shop = ({ collection }) => {
  //setTimeout(() =>console.log(collection),2000)

  const data = [];

  data.push(collection.map((collection) => collection.items));
  console.log(data);

  return (
    <div className="shop">
      <AllCategories collection={collection} />
    </div>
  );
};

export default Shop;
