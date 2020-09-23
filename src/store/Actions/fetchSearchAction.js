import { TYPE } from "../../constants/ActionType";

export const FetchSearchAction = (term) => {
  return {
    type: TYPE.FETCH_SEARCH_RESULT,
    payload: term,
  };
};

export const FetchSearchSuccessAction = (searchResult) => {
  return {
    type: TYPE.FETCH_SUCCESS_SEARCH_RESULT,
    payload: searchResult,
  };
};
