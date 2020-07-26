import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemCount } from "../../redux/cart/cart-selector";
import { toggleCartHidden } from "../../redux/cart/cart-action";
import { selectLoginHidden } from "../../redux/user/user-selector";
import { toggleLoginHidden } from "../../redux/user/user-action";

import "./basket-icon.styles.scss";

const BasketIcon = ({
  itemCount,
  toggleCartHidden,
  hiddenLogin,
  toggleLoginHidden,
}) => {
  console.log(hiddenLogin);
  const handelChange = () =>
    hiddenLogin === false ? toggleLoginHidden() : null;
  return (
    <div
      className="basket-icon"
      onClick={() => {
        handelChange();
        toggleCartHidden();
      }}
    >
      <span className="icon-basket icon"></span>
      {itemCount === 0 ? "" : <span className="item-count">{itemCount}</span>}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  toggleLoginHidden: () => dispatch(toggleLoginHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
  hiddenLogin: selectLoginHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketIcon);
