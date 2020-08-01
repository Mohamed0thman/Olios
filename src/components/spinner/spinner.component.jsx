import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./spinner.styles.scss";

const Spinner = () => (
  <div className="with-spinner">
    <Logo className="logo" />
  </div>
);

export default Spinner;
