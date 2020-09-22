import { TYPE } from "../../constants/ActionType";

export const FetchMovieDetailAction = (movieId) => {
  return {
    type: TYPE.FETCH_MOVIE_DETAIL,
    payload: movieId,
  };
};

export const FetchMovieDetailSuccessAction = (movieDetail) => {
  return {
    type: TYPE.FETCH_SUCCESS_MOVIE_DETAIL,
    payload: movieDetail,
  };
};
