import { connect } from "react-redux";
import { getMessagesFeed } from "../../redux/actions/messages";

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
});

const mapDispatchToProps = {
  getMessagesFeed,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
