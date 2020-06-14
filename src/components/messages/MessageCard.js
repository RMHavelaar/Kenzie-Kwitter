import React from "react";
import Card from "react-bootstrap/Card";
// import "./Message.css";

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
            <Card.Header
              id="sender"
              style={{
                color: "#ffffff",
                border: ".5px solid white",
                fontStyle:"oblique 40deg"
              }}
            >
              <span style={{ color: "#1DA1F2" }}>@</span>
              {username}
            </Card.Header>
            <p style={{ textAlign: "left" }}>{text}</p>
            <Card.Link style={{ color:"#1DA1F2" }} href="#" >Delete</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Messages;
