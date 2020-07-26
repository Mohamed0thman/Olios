import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import SelectedCategory from "./selected-category.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const SelectedCategoryContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SelectedCategory);

export default SelectedCategoryContainer;
