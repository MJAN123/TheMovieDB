import { TYPE } from "../../constants/ActionType";

export const FetchReviewAction = (id) => {
  return {
    type: TYPE.FETCH_REVIEW,
    payload: id,
  };
};

export const FetchReviewSuccessAction = (review) => {
  return {
    type: TYPE.FETCH_SUCCESS_REVIEW,
    payload: review,
  };
};
