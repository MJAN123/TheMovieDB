import {} from "immutable";
const INIT_STATE = {};
const FetchMoviesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "FETCH_MOVIES": {
      return { ...state, moviesList: action.payload };
    }
    default:
      return state;
  }
};

export default FetchMoviesReducer;
