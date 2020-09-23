import { connect } from "react-redux";
import { FetchMoviesAction } from "../../store/Actions";
import MoviesList from "./MovieList";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(FetchMoviesAction()),
  };
};
const mapStateToProps = (state) => {
  const moviesList = state.get("moviesList");

  const loading = state.get("loading");

  //const movieDetail = state.get("movieDetail");
  return {
    moviesList,
    loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
