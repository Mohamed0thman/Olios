import React from "react";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className='header__container'>
      <h1 className="header__heading">OLIOS</h1>
      <h3 className="header__text">NEWEST FURNITURE SHOP SITE</h3>
      <button className="header__button">VIEW MORE</button>
    </div>
    <div className='background-text'>
      <h1>NEWEST</h1>
    </div>
  </div>
);
export default Header;
