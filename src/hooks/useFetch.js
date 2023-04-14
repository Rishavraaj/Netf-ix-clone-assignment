import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);

    fetchDataFromApi(url)
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }, [url]);

  return { data };
};

export default useFetch;
