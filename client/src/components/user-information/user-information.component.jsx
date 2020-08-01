import React from "react";
import { connect } from "react-redux";

import { signOutStart } from "../../redux/user/user-action";

import CustomButton from "../custom-button/custom-button.component";

import "./user-information.styles.scss";

const UserInformation = ({ signOutStart, currentUser }) => {
  return (
    <div className="informations">
      <h1 className="title">PROFILE</h1>
      <div className="profile">
        <div className="user-image">
          <img
            src="https://i.ibb.co/58fGLtL/pngwing-com-3.png"
            alt="profileImage"
          />
        </div>
        <div className="user-info">
          <h4 className="name">{currentUser.displayName}</h4>
          <span className="email">{currentUser.email}</span>
        </div>
      </div>
      <ul className="list">
        <li>My orders</li>
        <li>Track orders</li>
        <li>store</li>
        <li>Pending shipments</li>
        <li>Pending payments</li>
        <li>chat suport</li>
      </ul>
      <CustomButton type="button" onClick={signOutStart}>
        <span className="icon-log-out"></span>
        SIGN OUT
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(null, mapDispatchToProps)(UserInformation);
