import Trending from "./Trending";
import { FetchTredningAction } from "../../store/Actions";
import { connect } from "react-redux";

const mapStateToProps = ({ trending }) => {
  return {
    trending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrending: () => dispatch(FetchTredningAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
