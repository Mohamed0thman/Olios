import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import GoTo from "../go-to/go-to.component";

import { selectCartHidden } from "../../redux/cart/cart-selector";
import { selectLoginHidden } from "../../redux/user/user-selector";
import { toggleLoginHidden } from "../../redux/user/user-action";
import { toggleCartHidden } from "../../redux/cart/cart-action";

import "./right-menu.styles.scss";

const RightMenu = ({
  hiddenCart,
  hiddenLogin,
  toggleLoginHidden,
  toggleCartHidden,
}) => {
  const [hiddenState, setHiddenState] = useState(false);

  const toggle = () =>
    setHiddenState(hiddenState === false ? "-active" : false);

  const handelClose = () => {
    if (window.innerWidth <= 425) {
      return (
        hiddenCart === false ? toggleCartHidden() : null,
        hiddenLogin === false ? toggleLoginHidden() : null
      );
    }
  };

  return (
    <div className="right-menu">
      <div
        className="button"
        onClick={() => {
          toggle();
          handelClose();
        }}
      >
        <span className={`icon ${hiddenState}`}>&nbsp;</span>
      </div>

      <div className={`background ${hiddenState}`}>
        <div className={`list ${hiddenState}`}>
          <Link
            to="/shop/living-room"
            className="link"
            onClick={() => (window.innerWidth <= 425 ? toggle() : null)}
          >
            <span className="name">LIVING ROOM</span>
            <span className="icon-living-room icon"></span>
          </Link>
          <Link
            to="/shop/office"
            className="link"
            onClick={() => (window.innerWidth <= 425 ? toggle() : null)}
          >
            <span className="name"> OFFICE</span>
            <span className="icon-office icon"></span>
          </Link>
          <Link
            to="/shop/bed-room"
            className="link"
            onClick={() => (window.innerWidth <= 425 ? toggle() : null)}
          >
            <span className="name"> BED ROOM</span>
            <span className="icon-bed-room icon"></span>
          </Link>
          <Link
            to="/shop/for-kids"
            className="link"
            onClick={() => (window.innerWidth <= 425 ? toggle() : null)}
          >
            <span className="name"> FOR KIDS</span>
            <span className="icon-for-kids icon "></span>
          </Link>
          <Link
            to="/shop/kitchen"
            className="link"
            onClick={() => (window.innerWidth <= 425 ? toggle() : null)}
          >
            <span className="name"> KITCHEN</span>
            <span className="icon-kitchen icon"></span>
          </Link>
          <Link
            to="/shop/accessories"
            className="link"
            onClick={() => (window.innerWidth <= 425 ? toggle() : null)}
          >
            <span className="name"> ACCESSORIES</span>
            <span className="icon-accessories icon"></span>
          </Link>
        </div>
        <Link
          to="/shop"
          onClick={() => (window.innerWidth <= 425 ? toggle() : null)}
        >
          <GoTo cheldern="SHOW ALL CATEGORIES" />
        </Link>
      </div>
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

export default connect(mapStatetToProps, mapDispatchToProps)(RightMenu);
