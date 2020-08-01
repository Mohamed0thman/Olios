import React from "react";

import "./go-to.styles.scss";

const GoTo = ({ cheldern, registerHere }) => (
  <div className="go-to">
    <span className={`link ${registerHere} `}>{cheldern}</span>
  </div>
);

export default GoTo;
