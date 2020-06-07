import React from "react";
import { isLoadingReducer } from "../../isLoadingReducer";
import Card from "react-bootstrap/Card";
import Link from ".";

class MessageCard extends React.Component {
  render() {
    return (
      <div id="messageCardContainer">
        <Card id="messageCard">
          <Card.Content>
            {/* Empty Profile Pic */}
            <Image src="./src/assets/images/EmptyProfilePic.png" />
            <Card.Header>
              {/* Path may be wrong but this will fill in the Users name on the Message Card */}
              <Link to={`/profile/${this.props.username}`}>
                <h2>{this.props.username}</h2>
              </Link>
            </Card.Header>
            <Card.Description>
              {/* This is the Message Text */}
              <p>{this.props.text}</p>
            </Card.Description>
          </Card.Content>
          <Card.Content>{/* What else do we want? */}</Card.Content>
          
        </Card>
      </div>
    );
  }
}

export default isLoadingReducer("messages")(MessageCard);
