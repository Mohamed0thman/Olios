import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import LeftMenu from "./components/lift-menu/lift-menu.component";
import RightMenu from "./components/right-menu/right-menu.component";

import Spinner from "./components/spinner/spinner.component.jsx";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import { checkUserSession } from "./redux/user/user-action";

import { selectCurrentUser } from "./redux/user/user-selector";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

import "./style.css";
import "./App.css";

const HomePage = lazy(() => import("./pages/homePage/homePage.component.jsx"));
const Shop = lazy(() => import("./pages/shop/shop.component"));
const ProductPage = lazy(() =>
  import("./pages/product-page/product-page.component.jsx")
);
const CheckoutPage = lazy(() =>
  import("./pages/checkout/checkout.component.jsx")
);
const SignUpPage = lazy(() => import("./pages/sign-up/sign-up.component"));
const SearchPage = lazy(() =>
  import("./pages/search-page/search-page.component.jsx")
);

const App = ({ checkUserSession, currentUser, fetchSlidersStart }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="app">
      <LeftMenu />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={Shop} />
            <Route path="/Product/:ProductLink" component={ProductPage} />
            <Route path="/checkout" component={CheckoutPage} />
          
            <Route
              exact
              path="/signup"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
