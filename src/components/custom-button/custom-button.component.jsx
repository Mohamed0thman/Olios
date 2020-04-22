import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn }) => (
  <div className={`custom-button ${isGoogleSignIn} `}>{children}</div>
);

export default CustomButton;
