import React, { createContext, useState } from "react";

export const FormContext = createContext();
const { Provider } = FormContext;

const FormContextProvider = ({ children }) => {
  const [cartUserData, setCartUserData] = useState();
  const [userData, setUserData] = useState();

  return (
    <Provider value={{ cartUserData, setCartUserData, userData, setUserData }}>
      {children}
    </Provider>
  );
};

export default FormContextProvider;
