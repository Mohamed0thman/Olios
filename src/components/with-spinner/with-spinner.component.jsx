import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./with-spinner.styles.scss";

const WithSpinner = (WrappedComponent) => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="with-spinner">
        <Logo className="logo" />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return spinner;
};

export default WithSpinner;
