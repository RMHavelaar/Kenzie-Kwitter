import { connect } from "react-redux";
import { createMessage } from "../../redux/actions/messages";
import { getMessagesFeed } from "../../redux/actions/messages"

const mapStateToProps = (state) => ({
  error: state.messages.error,
  loading: state.messages.loading,
});

const mapDispatchToProps = {
  createMessage,
  getMessagesFeed
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
