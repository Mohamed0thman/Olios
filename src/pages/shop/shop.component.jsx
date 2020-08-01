import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.action";

import Spinner from "../../components/spinner/spinner.component";

import "./shop.styles.scss";

const AllCategoriesContainer = lazy(() =>
  import("../../components/all-categories/all-categories.container")
);

const SelectedCategoryContainer = lazy(() =>
  import("../../components/selected-category/selected-category.container")
);

const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={AllCategoriesContainer}
        />
        <Route
          path={`${match.path}/:collectionType`}
          component={SelectedCategoryContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToprops)(Shop);
