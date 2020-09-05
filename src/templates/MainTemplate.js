import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "theme/mainTheme";
import GlobalStyles from "theme/GlobalStyles";
import Navigation from "components/molecules/Navigation/Navigation";
import Footer from "components/molecules/Footer/Footer";
import CartIcon from "components/atoms/CartIcon/CartIcon";
import { useHistory, useLocation } from "react-router-dom";

const MainTemplate = ({ children }) => {
  const { push } = useHistory();
  let { pathname } = useLocation();

  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Navigation />
      {children}

      {pathname !== "/cart" && pathname !== "/buyForm" ? (
        <CartIcon onClick={() => push("/cart")} />
      ) : null}

      <Footer />
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainTemplate;
