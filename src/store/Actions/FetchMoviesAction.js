import { TYPE } from "../../constants/ActionType";

export const FetchMoviesAction = () => {
  return {
    type: TYPE.FETCH_MOVIES,
  };
};

export const FetchMoviesSuccessAction = (movies) => {
  return {
    type: TYPE.FETCH_SUCCESS_MOVIES,
    payload: movies,
  };
};
