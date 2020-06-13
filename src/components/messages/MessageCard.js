import React from "react";
import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";

class Messages extends React.Component {
  render() {
    const { text, username } = this.props;
    return (
      <div id="messageCardContainer">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Message from:{username} </Card.Title>
    <p>{text}</p>
            <Card.Link href="#">Delete Message</Card.Link>
          </Card.Body>
        </Card>
        {/* <MessageFeed/> */}
      </div>
    );
  }
}

export default Messages;
