import { TYPE } from "../../constants/ActionType";

export const FetchTVReviewAction = (id) => {
  return {
    type: TYPE.FETCH_TVREVIEW,
    payload: id,
  };
};

export const FetchTVReviewSuccessAction = (TVreview) => {
  return {
    type: TYPE.FETCH_SUCCESS_TVREVIEW,
    payload: TVreview,
  };
};
