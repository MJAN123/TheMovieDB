import axios from "axios";

const KEY = "a5df7ecf7b3ada2b2c3a507abe9cd4a0";
const URL = "https://api.themoviedb.org/3/discover/movie?";

const getMovies = () => {
  return axios.get(`${URL}api_key=${KEY}`).then((res) => res.data);
};
export default getMovies;
