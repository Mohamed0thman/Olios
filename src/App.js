import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homePage/homePage.component.jsx";
import Shop from "./pages/shop/shop.component";
import SignUp from "./pages/sign-up/sign-up.component";
import ShopConatiner from './pages/shop/shop.container.jsx'

import LeftMenu from "./components/lift-menu/lift-menu.component";
import RightMenu from "./components/right-menu/right-menu.component";

import { selectCurrentUser } from "./redux/user/user-selector";
import { checkUserSession } from "./redux/user/user-action";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors.js";

import { fetchCollectionsStart } from "./redux/shop/shop.action";

import "./style.css";
import "./App.css";

const App = ({ collection, fetchCollectionsStart, checkUserSession }) => {
  
  
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="app">
      <LeftMenu />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" render={(props) => <ShopConatiner collection={collection} { ...props} />}/>
        <Route path="/signup" component={SignUp} />
      </Switch>
      <RightMenu collection={collection} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collection: selectCollectionsForPreview ,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
