import { connect } from "react-redux";
import { createMessage } from "../../redux/actions";

const mapStateToProps = (state) => ({
  error: state.messages.error,
  loading: state.messages.loading,
});

const mapDispatchToProps = {
  createMessage,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
