import { connect } from "react-redux";
import { FetchMoviesAction } from "../../store/Actions";
import MoviesList from "./MovieList";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(FetchMoviesAction()),
  };
};
const mapStateToProps = ({ moviesList, movieDetail }) => {
  return {
    moviesList,
    movieDetail,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
