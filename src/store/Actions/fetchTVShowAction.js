import { TYPE } from "../../constants/ActionType";

export const FetchTVShowAction = () => {
  return {
    type: TYPE.FETCH_TVSHOW,
  };
};

export const FetchTVShowSuccessAction = (tvshow) => {
  return {
    type: TYPE.FETCH_SUCCESS_TVSHOW,
    payload: tvshow,
  };
};
