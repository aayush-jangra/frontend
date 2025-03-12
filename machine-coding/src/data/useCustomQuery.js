import { useEffect, useState } from "react";

const cache = {};

export const useCustomQuery = (fn, dependencyArray) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const key = JSON.stringify(dependencyArray);

  useEffect(() => {
    if (cache[key]) {
      setData(cache[key]);
      setError(null);
    } else {
      setIsLoading(true);
      setError(null);
      setData(null);

      fn()
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          cache[key] = result;
          setData(result);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [key]);

  return {
    data,
    isLoading,
    isError: !!error,
    error,
  };
};
