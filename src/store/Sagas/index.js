import { all, call, put, takeEvery } from "redux-saga/effects";
import { FetchMoviesSuccessAction } from "../Actions";
import { TYPE } from "../../constants/ActionType";
import getMovies from "../../api";
function* fetchMovies() {
  const res = yield call(getMovies);
  console.log("Getting Response From Api In Saga", res);
  debugger;
  yield put(FetchMoviesSuccessAction(res));
}

export function* rootSaga() {
  console.log("From Root Saga");
  yield all([takeEvery(TYPE.FETCH_MOVIES, fetchMovies)]);
}
