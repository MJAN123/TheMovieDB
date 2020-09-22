import { TYPE } from "../../constants/ActionType";

const INIT_STATE = {
  moviesList: {},
  trending: {},
  upcomming: {},
  tvshow: {},
  people: {},
  movieDetail: {},
  TVDetail: {},
  peopleDetail: {},
  loading: false,
  page: 1,
};

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case TYPE.FETCH_MOVIES:
      return { ...state, loading: true };
    case TYPE.FETCH_SUCCESS_MOVIES:
      return { ...state, loading: false, moviesList: action.payload };

    case TYPE.FETCH_TRENDING:
      return { ...state, loading: true };
    case TYPE.FETCH_SUCCESS_TRENDING:
      return { ...state, loading: false, trending: action.payload };

    case TYPE.FETCH_UPCOMMING:
      return { ...state, loading: true };
    case TYPE.FETCH_SUCCESS_UPCOMMING:
      return { ...state, loading: false, upcomming: action.payload };

    case TYPE.FETCH_TVSHOW:
      return { ...state, loading: true };
    case TYPE.FETCH_SUCCESS_TVSHOW:
      return { ...state, loading: false, tvshow: action.payload };

    case TYPE.FETCH_PEOPLE:
      return { ...state, loading: true };
    case TYPE.FETCH_SUCCESS_PEOPLE:
      return { ...state, loading: false, people: action.payload };

    case TYPE.FETCH_MOVIE_DETAIL:
      return { ...state, loading: true };
    case TYPE.FETCH_SUCCESS_MOVIE_DETAIL:
      return { ...state, loading: false, movieDetail: action.payload };

    case TYPE.FETCH_TV_DETAIL:
      return { ...state, loading: true };
    case TYPE.FETCH_SUCCESS_TV_DETAIL:
      return { ...state, oading: false, TVDetail: action.payload };

    case TYPE.FETCH_PEOPLE_DETAIL:
      return { ...state, loading: true };
    case TYPE.FETCH_SUCCESS_PEOPLE_DETAIL:
      return { ...state, loading: false, peopleDetail: action.payload };

    default:
      return state;
  }
}
