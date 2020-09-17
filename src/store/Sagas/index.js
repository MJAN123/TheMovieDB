import { take, call, put, spawn } from "redux-saga/effects";
import FetchMoviesAction from "../Actions";
import getMovies from "../../api";
function* fetchMovies() {
  const res = yield call(getMovies);
  console.log("Getting Response From Api In Saga", res);
  yield put(FetchMoviesAction(res));
}

export function* rootSaga() {
  console.log("From Root Saga");
  yield take("FETCH_MOVIES");
  yield spawn(fetchMovies);
}
