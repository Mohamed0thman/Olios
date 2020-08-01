import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.action";

import Search from "../../components/search/search.component";

import "./search-page.styles.scss";

const SearchPage = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className="search-page">
      <Search />
    </div>
  );
};

const mapDispatchToprops = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToprops)(SearchPage);
