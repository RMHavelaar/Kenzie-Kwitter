import { connect } from "react-redux";
import { getMessagesFeed } from "../../redux/actions/messages";
import { addLike, removeLike } from "../../redux/actions";
const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  loggedInUser: state.auth.username
});

const mapDispatchToProps = {
  getMessagesFeed, addLike, removeLike
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
