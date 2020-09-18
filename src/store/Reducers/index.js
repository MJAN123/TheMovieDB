import { TYPE } from "../../constants/ActionType";

const INIT_STATE = {
  moviesList: {},
  movieDetail: {},
  loading: false,
  page: 1,
};

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case TYPE.FETCH_MOVIES:
      return { ...state, loading: true };
    case TYPE.FETCH_SUCCESS_MOVIES:
      return { ...state, loading: false, moviesList: action.payload };
    case TYPE.MOVIE_DETAIL:
      return { ...state, movieDetail: action.payload };
    default:
      return state;
  }
}
