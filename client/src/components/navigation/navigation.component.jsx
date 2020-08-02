import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import GoTo from "../go-to/go-to.component";

import { selectCartHidden } from "../../redux/cart/cart-selector";
import { selectLoginHidden } from "../../redux/user/user-selector";
import { toggleLoginHidden } from "../../redux/user/user-action";
import { toggleCartHidden } from "../../redux/cart/cart-action";

import "./navigation.styles.scss";

const Navigation = ({
  hiddenCart,
  hiddenLogin,
  toggleLoginHidden,
  toggleCartHidden,
}) => {
  const handelClose = () => {
    if (window.innerWidth <= 425) {
      return (
        hiddenCart === false ? toggleCartHidden() : null,
        hiddenLogin === false ? toggleLoginHidden() : null
      );
    }
  };

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link
              to="/shop/living-room"
              className="navigation__link"
              onClick={handelClose}
              htmlFor="navi-toggle"
            >
              <span className="name">LIVING ROOM</span>
              <span className="icon-living-room icon"></span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/shop/office"
              className="navigation__link"
              onClick={handelClose}
            >
              <span className="name"> OFFICE</span>
              <span className="icon-office icon"></span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/shop/bed-room"
              className="navigation__link"
              onClick={handelClose}
            >
              <span className="name"> BED ROOM</span>
              <span className="icon-bed-room icon"></span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/shop/for-kids"
              className="navigation__link"
              onClick={handelClose}
            >
              <span className="name"> FOR KIDS</span>
              <span className="icon-for-kids icon "></span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/shop/kitchen"
              className="navigation__link"
              onClick={handelClose}
            >
              <span className="name"> KITCHEN</span>
              <span className="icon-kitchen icon"></span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/shop/accessories"
              className="navigation__link"
              onClick={handelClose}
            >
              <span className="name"> ACCESSORIES</span>
              <span className="icon-accessories icon"></span>
            </Link>
          </li>
        </ul>
        <div className="navigation__got-to">
          <Link
            to="/shop"
            //   onClick={() => (window.innerWidth <= 425 ? toggle() : null)}
          >
            <GoTo cheldern="SHOW ALL CATEGORIES" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleLoginHidden: () => dispatch(toggleLoginHidden()),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStatetToProps = createStructuredSelector({
  hiddenCart: selectCartHidden,
  hiddenLogin: selectLoginHidden,
});

export default connect(mapStatetToProps, mapDispatchToProps)(Navigation);
