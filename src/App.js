import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import "./styles/style.css";
import Footer from "./components/Footer";
import AboutRenChen from "./pages/AboutRenChen";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/about" exact>
          <AboutRenChen />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>

      <Footer />
    </Fragment>
  );
};

export default App;
