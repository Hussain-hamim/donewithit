import { useState } from "react";
import data1 from "../api/data";

const useApi = (apiFunc) => {
  const [data, setData] = useState(data1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // console.log(data);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data);

    return response;
  };

  return { data, error, loading, request };
};

export default useApi;
