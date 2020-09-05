import React from "react";
import { AnimatedSwitch } from "react-router-transition";
import { Route } from "react-router-dom";

import HomePage from "pages/HomePage";
import TShirtsPage from "pages/TShirtsPage";
import SweatersPage from "pages/SweatersPage";
import ShirtsPage from "pages/ShirtsPage";
import TrousersPage from "pages/TrousersPage";
import BootsPage from "pages/BootsPage";
import CartPage from "pages/CartPage";
import BuyFormPage from "pages/BuyFormPage";
import ThanksForBuyingPage from "pages/ThanksForBuyingPage";

const Routes = () => {
  return (
    <>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/t-shirts">
          <TShirtsPage />
        </Route>

        <Route exact path="/sweaters">
          <SweatersPage />
        </Route>

        <Route exact path="/shirts">
          <ShirtsPage />
        </Route>

        <Route exact path="/trousers">
          <TrousersPage />
        </Route>

        <Route exact path="/boots">
          <BootsPage />
        </Route>

        <Route exact path="/cart">
          <CartPage />
        </Route>

        <Route exact path="/buyForm">
          <BuyFormPage />
        </Route>

        <Route exact path="/boughtItems">
          <ThanksForBuyingPage />
        </Route>
      </AnimatedSwitch>
    </>
  );
};

export default Routes;
