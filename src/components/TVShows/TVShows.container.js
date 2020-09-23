import TVShows from "./TVShows";
import { FetchTVShowAction } from "../../store/Actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const tvshow = state.get("tvshow");
  const loading = state.get("loading");

  return {
    tvshow,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTVShow: () => dispatch(FetchTVShowAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TVShows);
