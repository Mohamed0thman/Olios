import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./lift-menu.styles.scss";

const LeftMenu = () => (
  <div className="left-menu">
    <Logo className="logo" />
    <div className="icons-content">
      <span className="icon-login icon"></span>
      <span className="icon-home icon"></span>
      <span className="icon-basket icon"></span>
      <span className="icon-search icon"></span>
    </div>
  </div>
);
export default LeftMenu;
