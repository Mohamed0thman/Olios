import React, { useState } from "react";
import { Link } from "react-router-dom";

import GoTo from "../go-to/go-to.component";

import "./right-menu.styles.scss";

const RightMenu = () => {
  const [hiddenState, setHiddenState] = useState("");
  const [iconState, iconToggleState] = useState("");

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
        <ul className="list">
          <li className="item">
            <span className="text">LIVING ROOM</span>
            <span className="icon-living-room icon"></span>
          </li>
          <li className="item">
            <span className="text">OFFICE</span>
            <span className="icon-office icon"></span>
          </li>
          <li className="item">
            <span className="text">FOR KIDS</span>
            <span className="icon-kids-room icon"></span>
          </li>
          <li className="item">
            <span className="text">KITCHEN</span>
            <span className="icon-kitchen icon"></span>
          </li>
          <li className="item">
            <span className="text">ACCEESORIES</span>
            <span className="icon-accessories icon"></span>
          </li>
        </ul>
        <Link to="/shop">
          <GoTo cheldern="SHOW ALL CATEGORIES" />
        </Link>
      </div>
    </div>
  );
};
export default RightMenu;
