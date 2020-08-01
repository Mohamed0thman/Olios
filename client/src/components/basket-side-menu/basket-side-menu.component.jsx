import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import BasketItem from "../basket-item/basket-item.component";
import CustomButton from "../custom-button/custom-button.component";

import { selectCartItems } from "../../redux/cart/cart-selector.js";
import { toggleCartHidden } from "../../redux/cart/cart-action";

import "./basket-side-menu.styles.scss";

const BasketSideMenu = ({ cartItem, dispatch, history }) => {
  console.log(cartItem);
  return (
    <div className="basket-menu">
      <div className="basket-side-menu">
        <h1 className="title">BASKET</h1>
        <div className="basket-items">
          {cartItem.length ? (
            cartItem.map((cartItem) => (
              <BasketItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <span className="empty-message"> Your cart is empty </span>
          )}
        </div>

        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          CHECKOUT
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(BasketSideMenu));
