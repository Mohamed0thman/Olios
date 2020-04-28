import React, { useState } from "react";
import { Link } from "react-router-dom";

import GoTo from "../go-to/go-to.component";
import ShopIcon from "../shop-icon/shop-icon.component";

import "./right-menu.styles.scss";

const RightMenu = ({collection}) => {
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
          {collection.map(collections => (
            <ShopIcon key={collections.id} collection={collections} />
          ))}
        </ul>
        <Link to="/shop">
          <GoTo cheldern="SHOW ALL CATEGORIES" />
        </Link>
      </div>
    </div>
  );
};
export default RightMenu;
