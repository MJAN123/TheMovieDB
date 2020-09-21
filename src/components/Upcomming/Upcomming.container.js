import Upcomming from "./Upcomming";
import { FetchUpcommingAction } from "../../store/Actions";
import { connect } from "react-redux";

const mapStateToProps = ({ upcomming }) => {
  return {
    upcomming,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUpcomming: () => dispatch(FetchUpcommingAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upcomming);
