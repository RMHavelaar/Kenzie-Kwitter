import React from "react";
import Card from "react-bootstrap/Card";
import "./Message.css";

class Messages extends React.Component {
  render() {
    const { text, username } = this.props;
    return (
      <div id="messageCard">
      
        <Card id="CardOne">
          <Card.Body>
            <Card.Header id="cardHeader">
              <span style={{ color: "#1DA1F2" }}>@</span>
              {username}
            </Card.Header>
            <h4>{text}</h4>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Messages;
