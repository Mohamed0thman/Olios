import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import GoTo from "../go-to/go-to.component";

import "./sign-instyles.scss";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handelSubmit = async event => {
    event.preventDefault();
  };

  const handelChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="login-form">
      <h1 className="title">SIGN IN</h1>
      <form className="form" onSubmit={handelSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          placeholder="email"
          handleChange={handelChange}
          label={<span className="icon-mail"></span>}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          placeholder="password"
          handleChange={handelChange}
          label={<span className="icon-lock"></span>}
          required
        />
        <CustomButton type="submit"> SIGN IN </CustomButton>
        <CustomButton type="button" isGoogleSignIn="google-sign-in">
          <span className="icon-google google"></span>
          Sign in with google
        </CustomButton>
        <div className="have-account">
          <span>Don't have account?</span>
          <Link to='/signup'>
            <GoTo cheldern="REGISTER HERE" registerHere="register-here" />
          </Link>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
