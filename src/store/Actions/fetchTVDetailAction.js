import { TYPE } from "../../constants/ActionType";

export const FetchTVDetailAction = (TVId) => {
  return {
    type: TYPE.FETCH_TV_DETAIL,
    payload: TVId,
  };
};

export const FetchTVDetailSuccessAction = (TVDetail) => {
  return {
    type: TYPE.FETCH_SUCCESS_TV_DETAIL,
    payload: TVDetail,
  };
};
