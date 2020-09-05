import React from "react";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "theme/mainTheme";
import GlobalStyles from "theme/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      </BrowserRouter>
    </>
  ),
];
