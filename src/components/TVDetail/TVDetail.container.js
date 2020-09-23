import TVDetail from "./TVDetail";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FetchTVDetailAction } from "../../store/Actions";

const mapDispatchToProps = (dispatch) => {
  return {
    getTVDetial: (TVId) => dispatch(FetchTVDetailAction(TVId)),
  };
};
const mapStateToProps = (state) => {
  const TVDetail = state.get("TVDetail");
  return {
    TVDetail,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TVDetail));
