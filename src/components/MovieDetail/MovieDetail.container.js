import MovieDetail from "./MovieDetail";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  FetchMovieDetailAction,
  FetchMovieDetailSuccessAction,
  FetchReviewAction,
} from "../../store/Actions";

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetial: (movieId) => dispatch(FetchMovieDetailAction(movieId)),
    getReview: (movieId) => dispatch(FetchReviewAction(movieId)),
  };
};
const mapStateToProps = (state) => {
  const movieDetail = state.get("movieDetail");
  const review = state.get("review");
  return {
    movieDetail,
    review,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MovieDetail));
