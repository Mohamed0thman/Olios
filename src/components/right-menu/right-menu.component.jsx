import React, { useState } from "react";

import "./right-menu.styles.scss";

const RightMenu = () => {
  const [backgroundState, backgroundToggleState] = useState("background");
  const [iconState, iconToggleState] = useState("icon");

  const toggle = () => {
    backgroundToggleState(
      backgroundState === "background" ? "background -active" : "background"
    );
    iconToggleState(iconState === "icon" ? "icon -active" : "icon");
  };

  return (
    <div className="right-menu">
      <div className="button" onClick={toggle}>
        <span className={iconState}>&nbsp;</span>
      </div>

      <div className={backgroundState}>
        <ul className="list">
          <li className="item">
            <span className="text">LIVING ROOM</span>
            <span class="icon-living-room icon"></span>
          </li>
          <li className="item">
            <span className="text">OFFICE</span>
            <span class="icon-office icon"></span>
          </li>
          <li className="item">
            <span className="text">FOR KIDS</span>
            <span class="icon-kids-room icon"></span>
          </li>
          <li className="item">
            <span className="text">KITCHEN</span>
            <span class="icon-kitchen icon"></span>
          </li>
          <li className="item">
            <span className="text">ACCEESORIES</span>
            <span class="icon-accessories icon"></span>
          </li>
        </ul>
        <span className='link'>SHOW ALL CATEGORIES</span>
      </div>
    </div>
  );
};
export default RightMenu;
