import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SideMenu from "../side-menu/side-menu.component";
import BasketIcon from "../basket-icon/basket-icon.component";
import BasketSideMenu from "../basket-side-menu/basket-side-menu.component";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { selectCartHidden } from "../../redux/cart/cart-selector";
import { selectLoginHidden } from "../../redux/user/user-selector";
import { toggleLoginHidden } from "../../redux/user/user-action";
import { toggleCartHidden } from "../../redux/cart/cart-action";
import { selectCurrentUser } from "../../redux/user/user-selector";

import "./lift-menu.styles.scss";

const LeftMenu = ({
  hiddenCart,
  hiddenLogin,
  toggleLoginHidden,
  toggleCartHidden,
  currentUser,
}) => {
  const handelChange = () => (hiddenCart === false ? toggleCartHidden() : null);

  return (
    <div className="left-menu">
      <div className="menu">
        <div className='menu-container'>
          <Logo className="logo" />
          <div className="icons-content">
            {currentUser ? (
              <span
                className="icon-user icon"
                onClick={() => {
                  handelChange();
                  toggleLoginHidden();
                }}
              ></span>
            ) : (
              <span
                className="icon-login icon"
                onClick={() => {
                  handelChange();
                  toggleLoginHidden();
                }}
              ></span>
            )}
            <Link to="/" className="link">
              <span className="icon-home icon"></span>
            </Link>
            <BasketIcon />
            <Link to="/search" className="link">
              <span className="icon-search icon"></span>
            </Link>
          </div>
        </div>
        <div className="side-container">
          {hiddenCart ? null : <BasketSideMenu />}
          {hiddenLogin ? null : <SideMenu currentUser={currentUser} />}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleLoginHidden: () => dispatch(toggleLoginHidden()),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStatetToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hiddenCart: selectCartHidden,
  hiddenLogin: selectLoginHidden,
});
export default connect(mapStatetToProps, mapDispatchToProps)(LeftMenu);
