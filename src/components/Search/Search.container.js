import { connect } from "react-redux";
import { FetchSearchAction } from "../../store/Actions";
import Search from "./Search";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearch: (term) => dispatch(FetchSearchAction(term)),
  };
};
const mapStateToProps = (state) => {
  const search = state.get("search");
  const loading = state.get("loading");
  return {
    search,
    loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
