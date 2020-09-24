import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  FetchMoviesSuccessAction,
  FetchTrendingSuccessAction,
  FetchUpcommingSuccessAction,
  FetchTVShowSuccessAction,
  FetchPeopleSuccessAction,
  FetchMovieDetailSuccessAction,
  FetchPeopleDetailSuccessAction,
  FetchTVDetailSuccessAction,
  FetchSearchSuccessAction,
  FetchReviewSuccessAction,
  FetchTVReviewSuccessAction,
} from "../Actions";
import { TYPE } from "../../constants/ActionType";
import {
  getMovies,
  getTrendings,
  getUpcomming,
  getTVShow,
  getPeople,
  getMovieDetail,
  getPeopleDetail,
  getTVDetail,
  getSearchResult,
  getReview,
  getTVReview,
} from "../../api";

function* fetchMovies() {
  const res = yield call(getMovies);
  yield put(FetchMoviesSuccessAction(res));
}

function* fetchTrending() {
  console.log("Trending Worker Saga");
  const trending = yield call(getTrendings);
  console.log("Getting Response from From trending", trending);

  yield put(FetchTrendingSuccessAction(trending));
}

function* fetchUpcomming() {
  console.log("Trending Worker Saga");
  const upcomming = yield call(getUpcomming);
  console.log("Getting Response from From upcomming", upcomming);

  yield put(FetchUpcommingSuccessAction(upcomming));
}

function* fetchTVShow() {
  console.log("TVShow Worker Saga");
  const tvshow = yield call(getTVShow);
  console.log("Getting Response from From tv show", tvshow);

  yield put(FetchTVShowSuccessAction(tvshow));
}

function* fetchPeople() {
  console.log("People Worker Saga");
  const people = yield call(getPeople);
  console.log("Getting Response from From People", people);

  yield put(FetchPeopleSuccessAction(people));
}

function* fetchMovieDetail({ payload }) {
  console.log("Getting Id MOVIE DET ", payload);
  const movieDetail = yield call(getMovieDetail, payload);
  console.log("Getting Response from From People detail", movieDetail);

  yield put(FetchMovieDetailSuccessAction(movieDetail));
}

function* fetchTVDetail({ payload }) {
  console.log("Getting TV Detail Id ", payload);
  const TVDetail = yield call(getTVDetail, payload);
  console.log("Getting Response from From TV Detail", TVDetail);

  yield put(FetchTVDetailSuccessAction(TVDetail));
}

function* fetchPeopleDetail({ payload }) {
  console.log("Getting Id Fetch People Detail ", payload);
  const peopleDetail = yield call(getPeopleDetail, payload);
  console.log("Getting Response from From People Detail", peopleDetail);

  yield put(FetchPeopleDetailSuccessAction(peopleDetail));
}

function* fetchSearch({ payload }) {
  console.log("Getting Search Term woker saga ", payload);

  const searchResult = yield call(getSearchResult, payload);
  console.log("Getting Response from search Result", searchResult);

  yield put(FetchSearchSuccessAction(searchResult));
}

function* fetchReview({ payload }) {
  console.log("Getting Review woker saga ", payload);

  const review = yield call(getReview, payload);
  console.log("Getting Response from search Result", review);

  yield put(FetchReviewSuccessAction(review));
}

function* fetchTVReview({ payload }) {
  console.log("Getting TV Review woker saga ", payload);

  const TVReview = yield call(getTVReview, payload);
  console.log("Getting Response from TVReview Result", TVReview);

  yield put(FetchTVReviewSuccessAction(TVReview));
}

export function* rootSaga() {
  console.log("From Root Saga");
  yield all([
    takeEvery(TYPE.FETCH_MOVIES, fetchMovies),
    takeEvery(TYPE.FETCH_TRENDING, fetchTrending),
    takeEvery(TYPE.FETCH_UPCOMMING, fetchUpcomming),
    takeEvery(TYPE.FETCH_PEOPLE, fetchPeople),
    takeEvery(TYPE.FETCH_TVSHOW, fetchTVShow),
    takeEvery(TYPE.FETCH_MOVIE_DETAIL, fetchMovieDetail),
    takeEvery(TYPE.FETCH_TV_DETAIL, fetchTVDetail),
    takeEvery(TYPE.FETCH_PEOPLE_DETAIL, fetchPeopleDetail),
    takeEvery(TYPE.FETCH_SEARCH_RESULT, fetchSearch),
    takeEvery(TYPE.FETCH_REVIEW, fetchReview),
    takeEvery(TYPE.FETCH_TVREVIEW, fetchTVReview),
  ]);
}
