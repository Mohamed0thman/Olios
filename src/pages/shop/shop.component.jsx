import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.action";

import AllCategoriesContainer from "../../components/all-categories/all-categories.container";
import SelectedCategoryContainer from "../../components/selected-category/selected-category.container";

import "./shop.styles.scss";

const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop">
      <Route exact path={`${match.path}`} component={AllCategoriesContainer} />
      <Route
        path={`${match.path}/:collectionType`}
        component={SelectedCategoryContainer}
      />
    </div>
  );
};

const mapDispatchToprops = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToprops)(Shop);
