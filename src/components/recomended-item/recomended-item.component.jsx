import React from "react";
import { Link } from "react-router-dom";

import "./recomended-item.styles.scss";

const RecomendedItem = ({ items }) => {
  const { name, imageUrl, link } = items;
  return (
    <div className="recomended-item">
      <Link to={`/Product/${link}`}>
        <div className="image">
          <img src={imageUrl} alt={name} />
        </div>
        <h6>{name}</h6>
        <p>Lorem ipsum dolor sit amet</p>
      </Link>
    </div>
  );
};
export default RecomendedItem;
