import { TYPE } from "../../constants/ActionType";

export const FetchUpcommingAction = () => {
  return {
    type: TYPE.FETCH_UPCOMMING,
  };
};

export const FetchUpcommingSuccessAction = (upcomming) => {
  return {
    type: TYPE.FETCH_SUCCESS_UPCOMMING,
    payload: upcomming,
  };
};
