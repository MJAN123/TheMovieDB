import TVShows from "./TVShows";
import { FetchTVShowAction } from "../../store/Actions";
import { connect } from "react-redux";

const mapStateToProps = ({ tvshow }) => {
  return {
    tvshow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTVShow: () => dispatch(FetchTVShowAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TVShows);