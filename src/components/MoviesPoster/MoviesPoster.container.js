import MoviesPoster from "./MoviesPoster";
import { connect } from "react-redux";
import { MovieDetailAction } from "../../store/Actions";

const mapDispatchToProps = (dispatch) => {
  return {
    movieDetail: (movie) => dispatch(MovieDetailAction(movie)),
  };
};

export default connect(null, mapDispatchToProps)(MoviesPoster);
