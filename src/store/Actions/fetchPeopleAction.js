import { TYPE } from "../../constants/ActionType";

export const FetchPeopleAction = () => {
  return {
    type: TYPE.FETCH_PEOPLE,
  };
};

export const FetchPeopleSuccessAction = (people) => {
  return {
    type: TYPE.FETCH_SUCCESS_PEOPLE,
    payload: people,
  };
};
