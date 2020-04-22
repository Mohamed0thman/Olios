import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/homePage/homePage.component.jsx";
import Categories from "./pages/categories/categories.component";
import SignUp from "./pages/sign-up/sign-up.component";

import LeftMenu from "./components/lift-menu/lift-menu.component";
import RightMenu from "./components/right-menu/right-menu.component";

import "./style.css";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <LeftMenu />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Categories} />
        <Route path="/signup" component={SignUp} />
      </Switch>
      <RightMenu />
    </div>
  );
};
export default App;
