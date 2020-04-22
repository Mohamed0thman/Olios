import React from "react";

import SignIn from "../sign-in/sign-in.component";
import BasketSideMenu from "../basket-side-menu/basket-side-menu.component";

import "./side-menu.styles.scss";

const SideMenu = ({renderState}) => {
  return (
    <div className="side-menu">
      {renderState ? <SignIn /> : <BasketSideMenu />}

      {/* <div className="button">
        <span className="icon"></span>
      </div> */}
    </div>
  );
};

export default SideMenu;
