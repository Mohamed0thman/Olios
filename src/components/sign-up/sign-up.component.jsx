import React, { useState } from "react";
import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user-action";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }

    console.log(password);

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="signup-form">
      <h1 className="title">CREAT ACCOUNT</h1>
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          placeHolder="Name"
          required
          isSignUp="is-sign-up"
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeHolder="Email"
          required
          isSignUp="is-sign-up"
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeHolder="Password"
          required
          isSignUp="is-sign-up"
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeHolder="Confirm Password"
          required
          isSignUp="is-sign-up"
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
