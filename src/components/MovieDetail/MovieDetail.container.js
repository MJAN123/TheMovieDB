import MovieDetail from "./MovieDetail";
import { connect } from "react-redux";

const mapStateToProps = ({ movieDetail }) => {
  return {
    movieDetail,
  };
};

export default connect(mapStateToProps)(MovieDetail);
