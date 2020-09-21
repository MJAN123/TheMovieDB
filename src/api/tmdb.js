import axios from "axios";

const KEY = "a5df7ecf7b3ada2b2c3a507abe9cd4a0";

const URL_MOVIES = "https://api.themoviedb.org/3/discover/movie?";
const URL_TRENDING = "https://api.themoviedb.org/3/trending/all/day?";
const URL_UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?";
const URL_TVSHOW = "https://api.themoviedb.org/3/tv/popular?";
const URL_PEOPLE = "https://api.themoviedb.org/3/person/popular?";

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
