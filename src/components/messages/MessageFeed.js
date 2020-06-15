import React from "react";
import MessageCard from "./MessageCard";
import "./Message.css";

class MessageFeed extends React.Component {
  state = { messages: [] };
  componentDidMount() {
    this.props.getMessagesFeed();
  }
  render() {
    let messages = this.props.messages;
    return (
      <span>
        {messages.map((message) => {
          return (
            <MessageCard
              username={message.username}
              key={message.id}
              text={message.text}
              loggedInUser={this.props.loggedInUser}
              likes={message.likes}
              likesCount={message.likes.length}
              id={message.id}
              addLike={this.props.addLike}
              removeLike={this.props.removeLike}
            />
          );
        })}
      </span>
    );
  }
}

export default MessageFeed;
