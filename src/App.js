import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import store from "ducks/store";

import "./App.css";

import MainTemplate from "templates/MainTemplate";
import Routes from "routes/Routes";
import FormContextProvider from "context/FormContext";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <FormContextProvider>
          <MainTemplate>
            <ToastContainer
              position="top-right"
              autoClose={1500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Routes />
          </MainTemplate>
        </FormContextProvider>
      </Provider>
    </Router>
  );
}

export default App;
