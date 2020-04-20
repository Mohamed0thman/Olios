import React from "react";
import HomePage  from './pages/homePage/homePage.component.jsx';
import LeftMenu from './components/lift-menu/lift-menu.component'

import "./style.css";
import "./App.css";

const App = () => {
  return (
    <div className='app'>
      <LeftMenu />
      <HomePage />
    </div>
  );
};
export default App;
