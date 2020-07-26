import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import FormInput from "../form-input/form-input.component";
import SearchItem from "../search-item/search-item.component";

import "./search.styles.scss";

const Search = ({ collection }) => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);

  const item = collection.map((items) =>
    items.items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleChange = (event) => {
    setSearch(event.target.value);
    setItems(item);
  };

  return (
    <div className="search">
      <div className="form-container">
        <form className="form">
          <FormInput
            name="text"
            type="text"
            handleChange={handleChange}
            placeholder="Product Name"
            required
            isSearch="is-search"
          />
        </form>
        <p>Type product that you are looking for</p>
      </div>
      <div className="items">
        {items && search
          ? items.map((items) =>
              items.map((item) => <SearchItem key={item.id} item={item} />)
            )
          : ""
            // <p className="text">No items found</p>
        }
      </div>
      <div className="searched-result">
        <span>{search === "" ? 0 : items.map((item) => item.length)} </span>
        <span>Searched result</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(Search);
