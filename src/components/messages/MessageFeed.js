import React from "react";
import MessageCard from "./MessageCard";

class MessageFeed extends React.Component {
  state = { messages: [] };
  componentDidMount() {
    this.props.getMessagesList();
  }
  render() {
    let messages = this.props.messages;
    return (
      <span>
        <h1> Messages 645454 </h1>
        {messages.map((message) => {
          return < MessageCard username = {message.username} key = { message.id} text = {message.text} />
        })}
      </span>
    );
  }
}

export default MessageFeed;
