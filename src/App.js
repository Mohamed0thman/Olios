import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homePage/homePage.component.jsx";
import Shop from "./pages/shop/shop.component";
import ProductPage from "./pages/product-page/product-page.component.jsx";
import SignUpPage from "./pages/sign-up/sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component.jsx";
import SearchPage from "./pages/search-page/search-page.component.jsx";
// import ShopConatiner from "./pages/shop/shop.container.jsx";

import LeftMenu from "./components/lift-menu/lift-menu.component";
import RightMenu from "./components/right-menu/right-menu.component";

import { checkUserSession } from "./redux/user/user-action";
import { fetchCollectionsStart } from "./redux/shop/shop.action";
import { fetchSlidersStart } from "./redux/directory/directory.action";

import { setCurrentUser } from "./redux/user/user-action";
import { selectCurrentUser } from "./redux/user/user-selector";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";
import { selectSlidersForPreview } from "./redux/directory/directory.selectors";

import "./style.css";
import "./App.css";

const App = ({ checkUserSession, currentUser, fetchSlidersStart }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // useEffect(() => {
  //   fetchCollectionsStart();
  // }, [fetchCollectionsStart]);

  // useEffect(() => {
  //   fetchSlidersStart();
  // }, [fetchSlidersStart]);

  return (
    <div className="app">
      <LeftMenu />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/Product/:ProductLink" component={ProductPage} />
        <Route path="/checkout" component={CheckoutPage} />
        {/* // <Route path="/signup" component={SignUpPage} /> */}
        <Route path="/search" component={SearchPage} />
        <Route
          exact
          path="/signup"
          render={() => (currentUser ? <Redirect to="/" /> : <SignUpPage />)}
        />
      </Switch>
      <RightMenu />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collection: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  // fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  // fetchSlidersStart: () => dispatch(fetchSlidersStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
