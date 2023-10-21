import {fetcher} from "../utils/http";
import {DATA_PATH} from "../constants/configs";

export const useGetTrending = () => {
  return fetcher(DATA_PATH.trending);
};
export const useGetPopular = () => {
  return fetcher(DATA_PATH.popular);
};

export const useGetRecentlyAdded = () => fetcher(DATA_PATH.recentlyAdded);
