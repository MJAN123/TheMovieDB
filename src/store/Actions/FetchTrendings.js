import { TYPE } from "../../constants/ActionType";

export const FetchTredningAction = () => {
  return {
    type: TYPE.FETCH_TRENDING,
  };
};

export const FetchTrendingSuccessAction = (trending) => {
  return {
    type: TYPE.FETCH_SUCCESS_TRENDING,
    payload: trending,
  };
};
