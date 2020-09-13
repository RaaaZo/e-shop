import React, { createContext, useState } from "react";

export const IsLoggedContext = createContext();
const { Provider } = IsLoggedContext;

const IsLoggedContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const handleIsLogged = () => {
    setIsLogged(prevState => !prevState);
  };

  return <Provider value={{ isLogged, handleIsLogged }}>{children}</Provider>;
};

export default IsLoggedContextProvider;
