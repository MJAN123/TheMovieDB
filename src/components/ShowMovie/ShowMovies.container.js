import { connect } from "react-redux";
import { FetchMovieDetailAction } from "../../store/Actions";
import ShowMovies from "./ShowMovies";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShowMovie: (id) => dispatch(FetchMovieDetailAction(id)),
  };
};

export default connect(null, mapDispatchToProps)(ShowMovies);
