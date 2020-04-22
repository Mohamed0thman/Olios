import React, { useState } from "react";

import SideMenu from "../side-menu/side-menu.component";
import BasketIcon from "../basket-icon/basket-icon.component";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./lift-menu.styles.scss";

const LeftMenu = () => {
  const [hiddenState, setHiddenState] = useState(true);
  const [renderState, setRenderState] = useState(null);

  const handelChange = () => {
    setHiddenState(hiddenState === true ? false : true);
  };
  const handelChangeToSignin = () => {
    setRenderState(renderState === null ? true : null);
  };
  const handelChangeToBasketMenu = () => {
    setRenderState(renderState === null ? false : null);
  };

  return (
    <div className="left-menu">
      <div className="menu">
        <Logo className="logo" />
        <div className="icons-content">
          <span
            className="icon-login icon"
            onClick={() => {
              handelChange();
              handelChangeToSignin();
            }}
          ></span>
          <span className="icon-home icon"></span>
          <BasketIcon
            handelChange={handelChange}
            handelChangeToBasketMenu={handelChangeToBasketMenu}
          />
          <span className="icon-search icon"></span>
        </div>
      </div>
      {hiddenState ? true : <SideMenu renderState={renderState} />}
    </div>
  );
};
export default LeftMenu;
