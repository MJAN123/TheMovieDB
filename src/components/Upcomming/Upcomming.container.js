import Upcomming from "./Upcomming";
import { FetchUpcommingAction } from "../../store/Actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const upcomming = state.get("upcomming");
  const loading = state.get("loading");
  return {
    upcomming,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUpcomming: () => dispatch(FetchUpcommingAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upcomming);
