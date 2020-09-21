import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  FetchMoviesSuccessAction,
  FetchTrendingSuccessAction,
  FetchUpcommingSuccessAction,
  FetchTVShowSuccessAction,
  FetchPeopleSuccessAction,
} from "../Actions";
import { TYPE } from "../../constants/ActionType";
import {
  getMovies,
  getTrendings,
  getUpcomming,
  getTVShow,
  getPeople,
} from "../../api";

function* fetchMovies() {
  const res = yield call(getMovies);

  yield put(FetchMoviesSuccessAction(res));
}

function* fetchTrending() {
  console.log("Trending Worker Saga");
  const trending = yield call(getTrendings);
  console.log("Getting Response from From trending", trending);
  debugger;
  yield put(FetchTrendingSuccessAction(trending));
}

function* fetchUpcomming() {
  console.log("Trending Worker Saga");
  const upcomming = yield call(getUpcomming);
  console.log("Getting Response from From upcomming", upcomming);
  debugger;
  yield put(FetchUpcommingSuccessAction(upcomming));
}

function* fetchTVShow() {
  console.log("TVShow Worker Saga");
  const tvshow = yield call(getTVShow);
  console.log("Getting Response from From tv show", tvshow);
  debugger;
  yield put(FetchTVShowSuccessAction(tvshow));
}

function* fetchPeople() {
  console.log("People Worker Saga");
  const people = yield call(getPeople);
  console.log("Getting Response from From People", people);
  debugger;
  yield put(FetchPeopleSuccessAction(people));
}

export function* rootSaga() {
  console.log("From Root Saga");
  yield all([
    takeEvery(TYPE.FETCH_MOVIES, fetchMovies),
    takeEvery(TYPE.FETCH_TRENDING, fetchTrending),
    takeEvery(TYPE.FETCH_UPCOMMING, fetchUpcomming),
    takeEvery(TYPE.FETCH_PEOPLE, fetchPeople),
    takeEvery(TYPE.FETCH_TVSHOW, fetchTVShow),
  ]);
}
