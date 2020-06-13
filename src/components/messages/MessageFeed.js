import React from "react";
import MessageCard from "./MessageCard";

class MessageFeed extends React.Component {
  state = { messages: [] };
  componentDidMount() {
    console.log();
    this.props.getMessagesList();
  }
  render() {
    console.log(this.props.messages);
    let messages = this.props.messages;
    return (
      <span>
        <h1> Messages </h1>
        {messages.map((message) => {
          return < MessageCard username = {message.username} key = { message.id} text = {message.text} />
        })}
      </span>
    );
  }
}

export default MessageFeed;
