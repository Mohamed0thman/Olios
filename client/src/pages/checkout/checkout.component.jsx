import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selector";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItem, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="checkout-block">
        <span>Product</span>
      </div>
      <div className="checkout-block">
        <span>Description</span>
      </div>
      <div className="checkout-block">
        <span>Quantity</span>
      </div>
      <div className="checkout-block">
        <span>Price</span>
      </div>
      <div className="checkout-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItem.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total"> ToTAL: ${total}</div>

    <div className="test-warning">
      *please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - exp: 3/31 - cvv: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
