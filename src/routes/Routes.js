import React, { useContext } from "react";
import { AnimatedSwitch } from "react-router-transition";
import { Route, Redirect } from "react-router-dom";

import HomePage from "pages/HomePage";
import TShirtsPage from "pages/TShirtsPage";
import SweatersPage from "pages/SweatersPage";
import ShirtsPage from "pages/ShirtsPage";
import TrousersPage from "pages/TrousersPage";
import BootsPage from "pages/BootsPage";
import CartPage from "pages/CartPage";
import BuyFormPage from "pages/BuyFormPage";
import ThanksForBuyingPage from "pages/ThanksForBuyingPage";
import { FormContext } from "context/FormContext";
import { useSelector } from "react-redux";

const Routes = () => {
  const { userData } = useContext(FormContext);
  const cart = useSelector(state => state.cart);

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
          {cart.length !== 0 ? <BuyFormPage /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/boughtItems">
          {userData ? <ThanksForBuyingPage /> : <Redirect to="/" />}
        </Route>
      </AnimatedSwitch>
    </>
  );
};

export default Routes;
