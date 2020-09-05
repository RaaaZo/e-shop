import React, { createContext, useState } from "react";

export const FormContext = createContext();
const { Provider } = FormContext;

const FormContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    address: "Stefana Czarnieckiego 18b/52",
    city: "Pogórze",
    email: "koprowicz.mateusz@gmail.com",
    firstName: "Mateusz",
    lastName: "Koprowicz",
    postCode: "81"
  });

  return <Provider value={{ userData, setUserData }}>{children}</Provider>;
};

export default FormContextProvider;
