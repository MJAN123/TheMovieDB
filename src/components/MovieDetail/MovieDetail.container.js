import MovieDetail from "./MovieDetail";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FetchMovieDetailAction } from "../../store/Actions";

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetial: (movieId) => dispatch(FetchMovieDetailAction(movieId)),
  };
};
const mapStateToProps = (state) => {
  const movieDetail = state.get("movieDetail");
  return {
    movieDetail,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MovieDetail));
