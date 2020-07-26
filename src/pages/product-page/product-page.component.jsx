import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStart } from "../../redux/shop/shop.action";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors.js";

import Product from "../../components/product/product.component";

import "./product-page.styles.scss";

const ProductPage = ({ match, collection, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  console.log(match);
  const items = collection.map((collections) =>
    collections.items.filter((item) => item.link === match.params.ProductLink)
  );
  setTimeout(() => console.log(items));
  // const add = item.push({ quantity: 1 });
  // console.log(add);

  return (
    <div className="product-page">
      {items.map((item) =>
        item.map((item, index) => (
          <Product
            key={item.id}
            item={item}
            collection={collection}
            link={match}
          />
        ))
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionsForPreview,
});

const mapDispatchToprops = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToprops)(ProductPage);
