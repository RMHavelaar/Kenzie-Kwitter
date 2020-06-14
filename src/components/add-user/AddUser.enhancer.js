import { connect } from "react-redux";
import { addUser } from "../../redux/actions/users";

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  error: state.users.error,
});

const mapDispatchToProps = {
  addUser,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);