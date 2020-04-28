import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import ShopItems from "../shop-item/shop-item.component";

import "./all-categories.styles.scss";

const AllCategories = ({ collection }) => {
  //setTimeout(() =>console.log(collection),2000)

  return (
    <div className="all-categories">
      <h2 className="title">PRODUCTS</h2>
      <div className="items">
        
          {collection.map((collection) =>
            collection.items
              .map((item, index) => (
                <ShopItems key={item.id} item={item} size={index} />
              ))
              .slice(0, 5)
          )}
     
      </div>
    </div>
  );
};

export default AllCategories;
