import { connect } from "react-redux";
import { MovieDetailAction } from "../../store/Actions";
import ShowMovies from "./ShowMovies";

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    movieDetail: () => dispatch(MovieDetailAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowMovies);
