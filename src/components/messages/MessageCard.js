import React from "react";
import Card from "react-bootstrap/Card";
// import "./Message.css";
import likeImage from "./images/like.png";

class Messages extends React.Component {
  handleLike = (messageId, loggedInUser, likes) => {
    let likeId = likes.filter(like => like.username === loggedInUser)
    if(likeId[0]!== undefined) {
      this.props.removeLike(likeId[0].id)
    }else{
      this.props.addLike(messageId)
    }
  }
  render() {
    const { text, username, id, loggedInUser } = this.props;
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
            cursor:"pointer"
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
            <img onClick={() => this.handleLike(id, loggedInUser, this.props.likes)} src={likeImage} /> {this.props.likesCount} Likes <br />
            <Card.Link style={{ color:"#1DA1F2" }} href="#" >Delete</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Messages;
