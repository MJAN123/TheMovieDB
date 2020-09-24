import TVDetail from "./TVDetail";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FetchTVDetailAction, FetchTVReviewAction } from "../../store/Actions";

const mapDispatchToProps = (dispatch) => {
  return {
    getTVDetial: (TVId) => dispatch(FetchTVDetailAction(TVId)),
    getTVReview: (TVId) => dispatch(FetchTVReviewAction(TVId)),
  };
};
const mapStateToProps = (state) => {
  const TVDetail = state.get("TVDetail");
  const review = state.get("TVReview");
  return {
    TVDetail,
    review,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TVDetail));
