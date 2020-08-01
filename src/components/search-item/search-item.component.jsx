import React from "react";
import { withRouter } from "react-router-dom";

import "./search-item.styles.scss";

const SearchItem = ({ item, history }) => {
  const { name, imageUrl, link } = item;

  console.log(item);

  return (
    <div
      className="search-item"
      onClick={() => history.push(`/Product/${link}`)}
    >
      <div className="images">
        <img src={imageUrl} alt={name} />
      </div>
      <h3 className="name">{name.toUpperCase()}</h3>
    </div>
  );
};

export default withRouter(SearchItem);
