import React from "react";
import { Link } from "react-router-dom";

import "./sliders-item.styles.scss";

const SlidersItem = ({ item }) => {
  const { name, imageUrl, link } = item;
  return (
    <div className="sliders-item">
      <Link to={`/Product/${link}`}>
        <div className="image">
          <img src={imageUrl} alt={name} border="0" />
        </div>
      </Link>
    </div>
  );
};

export default SlidersItem;
