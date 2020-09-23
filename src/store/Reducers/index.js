import { TYPE } from "../../constants/ActionType";
import { fromJS } from "immutable";

const INIT_STATE = fromJS({
  moviesList: {},
  trending: {},
  upcomming: {},
  tvshow: {},
  people: {},
  movieDetail: {},
  TVDetail: {},
  peopleDetail: {},
  search: {},
  loading: false,
  page: 1,
});

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case TYPE.FETCH_MOVIES:
      return state.set("loading", true);
    case TYPE.FETCH_SUCCESS_MOVIES: {
      return state.set("loading", false).set("moviesList", action.payload);
    }

    case TYPE.FETCH_TRENDING:
      return state.set("loading", true);
    case TYPE.FETCH_SUCCESS_TRENDING:
      return state.set("loading", false).set("trending", action.payload);

    case TYPE.FETCH_UPCOMMING:
      return state.set("loading", true);
    case TYPE.FETCH_SUCCESS_UPCOMMING:
      return state.set("loading", false).set("upcomming", action.payload);

    case TYPE.FETCH_TVSHOW:
      return state.set("loading", true);
    case TYPE.FETCH_SUCCESS_TVSHOW:
      return state.set("loading", false).set("tvshow", action.payload);

    case TYPE.FETCH_PEOPLE:
      return state.set("loading", true);
    case TYPE.FETCH_SUCCESS_PEOPLE:
      return state.set("loading", false).set("people", action.payload);

    case TYPE.FETCH_MOVIE_DETAIL:
      return state.set("loading", true);
    case TYPE.FETCH_SUCCESS_MOVIE_DETAIL:
      return state.set("loading", false).set("movieDetail", action.payload);

    case TYPE.FETCH_TV_DETAIL:
      return state.set("loading", true);
    case TYPE.FETCH_SUCCESS_TV_DETAIL:
      return state.set("loading", false).set("TVDetail", action.payload);

    case TYPE.FETCH_PEOPLE_DETAIL:
      return state.set("loading", true);
    case TYPE.FETCH_SUCCESS_PEOPLE_DETAIL:
      return state.set("loading", false).set("peopleDetail", action.payload);

    case TYPE.FETCH_SEARCH_RESULT:
      return state.set("loading", true);
    case TYPE.FETCH_SUCCESS_SEARCH_RESULT:
      return state.set("loading", false).set("search", action.payload);

    default:
      return state;
  }
}
