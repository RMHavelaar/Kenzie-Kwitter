import React from "react";
import Card from "react-bootstrap/Card";
// import "./Message.css";
import likeImage from "./images/like.png";

class Messages extends React.Component {
  handleLike = (messageId, loggedInUser, likes) => {
    let likeId = likes.filter((like) => like.username === loggedInUser);
    if (likeId[0] !== undefined) {
      this.props.removeLike(likeId[0].id);
    } else {
      this.props.addLike(messageId);
    }
  };

  render() {
    const { text, username, id, loggedInUser } = this.props;
    return (
      <div id="messageCard">
        <Card id="CardOne">
          <Card.Body>
            <Card.Header id="cardHeader">
              <span style={{ color: "#1DA1F2" }}>@</span>
              {username}
            </Card.Header>
            <p style={{ textAlign: "left" }}>{text}</p>
            <img
              onClick={() =>
                this.handleLike(id, loggedInUser, this.props.likes)
              }
              src={likeImage}
              alt="Like Button"
            />{" "}
            {this.props.likesCount} Likes
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Messages;
