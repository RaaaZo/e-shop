import React, { createContext, useState } from "react";

export const FormContext = createContext();
const { Provider } = FormContext;

const FormContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  return <Provider value={{ userData, setUserData }}>{children}</Provider>;
};

export default FormContextProvider;
