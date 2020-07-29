import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemCount } from "../../redux/cart/cart-selector";
import { toggleCartHidden } from "../../redux/cart/cart-action";
import { selectLoginHidden } from "../../redux/user/user-selector";
import { toggleLoginHidden } from "../../redux/user/user-action";


import { BasketContainer, ItemCount, OptionDiv } from "./basket-icon.styles";

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
    <BasketContainer
      onClick={() => {
        handelChange();
        toggleCartHidden();
      }}
    >
      <OptionDiv className="icon-basket "></OptionDiv>
      {itemCount === 0 ? (
        ""
      ) : (
        <ItemCount>{itemCount < 100 ? itemCount : 99}</ItemCount>
      )}
    </BasketContainer>
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
