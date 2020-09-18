import { TYPE } from "../../constants/ActionType";

export const MovieDetailAction = (movie) => {
  return {
    type: TYPE.MOVIE_DETAIL,
    payload: movie,
  };
};
