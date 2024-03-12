import { useEffect, useState } from "react";

const useFetch = (url) => {

     const [data, setData] = useState(null);
     const [pending, setIsPending] = useState(true);
     const [error, setError] = useState(null);

  
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("could not fecth the data");
        }
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((e) => {
        setError(e.message);
        setIsPending(false);
      });
  }, [url]);

  return {data, pending, error}
};

export default useFetch;