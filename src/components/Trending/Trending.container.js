import Trending from "./Trending";
import { FetchTredningAction } from "../../store/Actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const trending = state.get("trending");
  const loading = state.get("loading");
  return {
    trending,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrending: () => dispatch(FetchTredningAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
