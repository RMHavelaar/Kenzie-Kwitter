import React from "react";
import Card from "react-bootstrap/Card";
import "./Message.css";

class Messages extends React.Component {
  render() {
    const { text, username } = this.props;
    return (
      <div id="messageCard">
        <Card
          style={{
            width: "25rem",
            height: "10rem",
            position: "relative",
            textAlign: "center",
            marginBottom: "1em",
            left: "65%",
          }}
        >
          <Card.Body
            style={{
              backgroundColor: "#15202b",
              color: "#ffffff",
            }}
          >
            <Card.Title
              id="sender"
              style={{
                color: "#ffffff",
              }}
            >
              <span style={{color:"#1DA1F2"}}>@</span>{username}
            </Card.Title>
            <p style={{ textAlign: "left" }}>{text}</p>
            <Card.Link href="#">Delete Message</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Messages;
