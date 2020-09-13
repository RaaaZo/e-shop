import React, { useContext } from "react";
import { AnimatedSwitch } from "react-router-transition";
import { Route, Redirect } from "react-router-dom";
import { FormContext } from "context/FormContext";
import { useSelector } from "react-redux";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const TShirtsPage = React.lazy(() => import("../pages/TShirtsPage"));
const SweatersPage = React.lazy(() => import("../pages/SweatersPage"));
const ShirtsPage = React.lazy(() => import("../pages/ShirtsPage"));
const TrousersPage = React.lazy(() => import("../pages/TrousersPage"));
const BootsPage = React.lazy(() => import("../pages/BootsPage"));
const CartPage = React.lazy(() => import("../pages/CartPage"));
const BuyFormPage = React.lazy(() => import("../pages/BuyFormPage"));
const ThanksForBuyingPage = React.lazy(() =>
  import("../pages/ThanksForBuyingPage")
);
const RegisterPage = React.lazy(() => import("../pages/RegisterPage"));
const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const PurchaseHistoryPage = React.lazy(() =>
  import("../pages/PurchaseHistoryPage")
);

const Routes = () => {
  const { userData, cartUserData } = useContext(FormContext);
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
          {cartUserData ? <ThanksForBuyingPage /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/register">
          <RegisterPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/purchaseHistory">
          {userData ? <PurchaseHistoryPage /> : <Redirect to="/" />}
        </Route>
      </AnimatedSwitch>
    </>
  );
};

export default Routes;
