import { connect } from "react-redux";
import { profile } from "../../redux/actions/profile";
import { putPhoto } from "../../redux/actions/putPhoto";
import { login } from "../../redux/actions/auth";
import { deleteUser } from "../../redux/actions/deleteUser";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  username: state.profile.username,
  pictureLocation: state.profile.pictureLocation,
  displayName: state.profile.displayName,
  about: state.profile.about,
  googleId: null,
  createdAt: state.profile.createdAt,
  updatedAt: state.profile.updatedAt,
  loading: state.profile.loading,
  error: state.profile.error,
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  profile,
  putPhoto,
  deleteUser,
  login,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
