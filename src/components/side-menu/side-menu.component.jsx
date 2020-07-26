import React from "react";
import { connect } from "react-redux";

import SignIn from "../sign-in/sign-in.component";
import UserInformation from "../user-information/user-information.component";

import { toggleLoginHidden } from "../../redux/user/user-action";

import "./side-menu.styles.scss";

const SideMenu = ({ currentUser, toggleLoginHidden }) => {
  return (
    <div className="side-menu">
      {currentUser ? <UserInformation currentUser={currentUser} /> : <SignIn />}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleLoginHidden: () => dispatch(toggleLoginHidden()),
});

export default connect(null, mapDispatchToProps)(SideMenu);
