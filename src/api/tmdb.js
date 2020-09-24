import axios from "axios";
const KEY = "a5df7ecf7b3ada2b2c3a507abe9cd4a0";

const URL_MOVIES = "https://api.themoviedb.org/3/discover/movie?";
const URL_TRENDING = "https://api.themoviedb.org/3/trending/all/day?";
const URL_UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?";
const URL_TVSHOW = "https://api.themoviedb.org/3/tv/popular?";
const URL_PEOPLE = "https://api.themoviedb.org/3/person/popular?";
const URL_MOVIE_DETAIL = "https://api.themoviedb.org/3/movie/";
const URL_TV_DETAIL = "https://api.themoviedb.org/3/tv/";
const URL_PEOPLE_DETAIL = "https://api.themoviedb.org/3/person/";
const URL_SEARCH = "https://api.themoviedb.org/3/search/movie?";
const URL_REVIEW = "https://api.themoviedb.org/3/movie/";
const URL_TVREVIEW = "https://api.themoviedb.org/3/tv/";

export const getMovies = () => {
  return axios.get(`${URL_MOVIES}api_key=${KEY}`).then((res) => {
    return res.data;
  });
};

export const getTrendings = () => {
  return axios.get(`${URL_TRENDING}api_key=${KEY}`).then((res) => {
    return res.data;
  });
};

export const getUpcomming = () => {
  return axios.get(`${URL_UPCOMING}api_key=${KEY}`).then((res) => {
    return res.data;
  });
};

export const getTVShow = () => {
  return axios.get(`${URL_TVSHOW}api_key=${KEY}`).then((res) => {
    return res.data;
  });
};

export const getPeople = () => {
  return axios.get(`${URL_PEOPLE}api_key=${KEY}`).then((res) => {
    return res.data;
  });
};

export const getMovieDetail = (id) => {
  console.log("Movie Id from ap", id);
  return axios.get(`${URL_MOVIE_DETAIL + id}?api_key=${KEY}`).then((res) => {
    return res.data;
  });
};

export const getTVDetail = (TVId) => {
  console.log("TV ", TVId);
  return axios.get(`${URL_TV_DETAIL + TVId}?api_key=${KEY}`).then((res) => {
    return res.data;
  });
};

export const getPeopleDetail = (PeopleId) => {
  console.log("People Id from api", PeopleId);
  return axios
    .get(`${URL_PEOPLE_DETAIL + PeopleId}?api_key=${KEY}`)
    .then((res) => {
      return res.data;
    });
};

export const getSearchResult = (term) => {
  console.log("Search from api", term);

  return axios.get(`${URL_SEARCH}api_key=${KEY}&query=${term}`).then((res) => {
    return res.data;
  });
};

export const getReview = (id) => {
  console.log("Review from api", id);

  return axios.get(`${URL_REVIEW + id}/reviews?api_key=${KEY}`).then((res) => {
    return res.data;
  });
};

export const getTVReview = (id) => {
  console.log("Review from api", id);

  return axios
    .get(`${URL_TVREVIEW + id}/reviews?api_key=${KEY}`)
    .then((res) => {
      return res.data;
    });
};
