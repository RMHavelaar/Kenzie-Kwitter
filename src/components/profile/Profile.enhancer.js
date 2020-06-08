import { connect } from "react-redux";
import { profile } from "../../redux/actions/profile";


// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  username: state.auth.username,
  user: state.profile.user, 
  loading: state.profile.loading,
  error: state.profile.error,
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  profile,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);