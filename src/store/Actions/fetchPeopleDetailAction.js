import { TYPE } from "../../constants/ActionType";

export const FetchPeopleDetailAction = (peopleId) => {
  return {
    type: TYPE.FETCH_PEOPLE_DETAIL,
    payload: peopleId,
  };
};

export const FetchPeopleDetailSuccessAction = (peopleDetail) => {
  return {
    type: TYPE.FETCH_SUCCESS_PEOPLE_DETAIL,
    payload: peopleDetail,
  };
};
