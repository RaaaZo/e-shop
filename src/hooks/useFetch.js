import { useState, useContext } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { IsLoggedContext } from "context/IsLoggedContext";

const useFetch = (signIn, register) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const { handleIsLogged } = useContext(IsLoggedContext);

  const { goBack } = useHistory();

  const fetchData = async (url, values, method) => {
    setIsLoading(true);
    try {
      const response = await Axios[method](url, values);
      setData(response);
      setIsLoading(false);
      setError("");

      if (signIn) {
        handleIsLogged();
        goBack(1);
      }

      if (register) {
        goBack(1);
      }
    } catch (err) {
      setError(err.response.data.message);
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, fetchData };
};

export default useFetch;
