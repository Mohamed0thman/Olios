import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

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
        checked={checked}
        type="checkbox"
        className="navigation__checkbox"
        onChange={handleClick}
      />

      <label
        className="navigation__button"
        onClick={() => {
          if (window.innerWidth <= 425) {
            handelClose();
          }
          return handleClick();
        }}
      >
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink
              activeClassName="active-link"
              to="/shop/living-room"
              className="navigation__link"
              onClick={window.innerWidth <= 425 ? handleClick : null}
            >
              <span className="name">LIVING ROOM</span>
              <span className="icon-living-room icon"></span>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              activeClassName="active-link"
              to="/shop/office"
              className="navigation__link"
              onClick={window.innerWidth <= 425 ? handleClick : null}
            >
              <span className="name"> OFFICE</span>
              <span className="icon-office icon"></span>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              activeClassName="active-link"
              to="/shop/bed-room"
              className="navigation__link"
              onClick={window.innerWidth <= 425 ? handleClick : null}
            >
              <span className="name"> BED ROOM</span>
              <span className="icon-bed-room icon"></span>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              activeClassName="active-link"
              to="/shop/for-kids"
              className="navigation__link"
              onClick={window.innerWidth <= 425 ? handleClick : null}
            >
              <span className="name"> FOR KIDS</span>
              <span className="icon-for-kids icon "></span>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              activeClassName="active-link"
              to="/shop/kitchen"
              className="navigation__link"
              onClick={window.innerWidth <= 425 ? handleClick : null}
            >
              <span className="name"> KITCHEN</span>
              <span className="icon-kitchen icon"></span>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              activeClassName="active-link"
              to="/shop/accessories"
              className="navigation__link"
              onClick={window.innerWidth <= 425 ? handleClick : null}
            >
              <span className="name"> ACCESSORIES</span>
              <span className="icon-accessories icon"></span>
            </NavLink>
          </li>
        </ul>
        <div className="navigation__got-to">
          <Link
            to="/shop"
            onClick={() => {
              if (window.innerWidth <= 425) {
                handleClick();
              }
              return handelClose();
            }}
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
