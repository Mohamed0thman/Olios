import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import AllCategories from "./all-categories.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const AllCategoriesContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(AllCategories);

export default AllCategoriesContainer;
