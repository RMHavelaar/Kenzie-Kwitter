import { connect } from "react-redux";
import { getUserList } from "../../redux/actions/users";
// import { lookUpProfile } from "../../redux/actions/profile";

const mapStateToProps = (state) => ({
    usersList: state.users.usersList,
    loading: state.users.loading,
    error: state.users.error,
  });
  
  const mapDispatchToProps = {
    getUserList
  };


export const enhancer = connect(mapStateToProps, mapDispatchToProps);