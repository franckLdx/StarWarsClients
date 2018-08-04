import React, { Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./navbar";
import Route from "./route";

import './app.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Navbar />
        <Route />
      </Fragment>
    </Router>
  );
}

const Header = () =>
  <header className="app__header header">
    <img className="header__image" src="./icones/favicon_Boba.ico" alt="" />
    <h1 className="title-h1 header__title-h1">Star Wars</h1>
  </header>

export default App;
