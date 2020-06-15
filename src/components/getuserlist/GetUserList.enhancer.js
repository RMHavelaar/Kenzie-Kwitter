import { connect } from "react-redux";
import { getUserList } from "../../redux/actions/getUserList";

const mapStateToProps = (state) => ({
  usersList: state.usersList,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  getUserList,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
