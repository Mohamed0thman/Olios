import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, isAddTo, ...props }) => (
  <button className={`custom-button ${isGoogleSignIn} ${isAddTo}  `} {...props}>
    {children}
  </button>
);

export default CustomButton;
