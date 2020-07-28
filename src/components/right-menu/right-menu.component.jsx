import React, { useState } from "react";
import { Link } from "react-router-dom";

import GoTo from "../go-to/go-to.component";

import "./right-menu.styles.scss";

const RightMenu = () => {
  const [hiddenState, setHiddenState] = useState("");
  const [iconState, iconToggleState] = useState("");
  const [selected, setSelected] = useState("");

  const toggle = () => {
    setHiddenState(hiddenState === "" ? "-active" : "");
    iconToggleState(iconState === "" ? "-active" : "");
  };

  return (
    <div className="right-menu">
      <div className="button" onClick={toggle}>
        <span className={`icon ${iconState}`}>&nbsp;</span>
      </div>

      <div className={`background ${hiddenState}`}>
        <div className="list">
          <Link
            to="/shop/living-room"
            className={`link ${selected} `}
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
export default RightMenu;
