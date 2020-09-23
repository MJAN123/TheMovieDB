import PeopleDetail from "./PeopleDetail";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FetchPeopleDetailAction } from "../../store/Actions";

const mapDispatchToProps = (dispatch) => {
  return {
    getPeopleDetial: (peopleId) => dispatch(FetchPeopleDetailAction(peopleId)),
  };
};
const mapStateToProps = (state) => {
  const peopleDetail = state.get("peopleDetail");
  return {
    peopleDetail,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PeopleDetail));
