"use client";

import {useEffect, useState} from "react";
import axios from "axios";
import {DATA_PATH} from "../constants/configs";

export const useGetOtherAnime = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(DATA_PATH.trending, {
        params: {
          page: 1,
          perPage: 20,
        },
      });
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
  };
};
