import { connect } from "react-redux";
import { FetchMoviesAction } from "../../store/Actions";
import MoviesList from "./MovieList";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(FetchMoviesAction()),
  };
};
const mapStateToProps = ({ moviesList, movieDetail, loading }) => {
  return {
    moviesList,
    movieDetail,
    loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
