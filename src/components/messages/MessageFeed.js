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
            />
          );
        })}
      </span>
    );
  }
}

export default MessageFeed;
