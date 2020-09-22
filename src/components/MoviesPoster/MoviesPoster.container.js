import MoviesPoster from "./MoviesPoster";
import { connect } from "react-redux";
import { FetchMovieDetailAction } from "../../store/Actions";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetail: (id) => dispatch(FetchMovieDetailAction(id)),
  };
};

export default connect(null, mapDispatchToProps)(MoviesPoster);
