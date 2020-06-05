import React from "react";
import { isLoadingReducer } from "../../isLoadingReducer";
import { Form, Button } from "react-bootstrap";

class MessageCard extends React.Component {
  // state = {  }
  render() {
    return (
      <div id="messageCardContainer">
        <Card id="messageCard">
          <Card.Content>
            {/* Empty Profile Pic */}
            <Image src="./src/assets/images/EmptyProfilePic.png" />
            <Card.Header>
              <Link to={`/login/${this.props.username}`}>
                <h2>{this.props.username}</h2>
              </Link>
            </Card.Header>
            <Card.Description>
            <p>{this.props.text}</p>
            </Card.Description>
          </Card.Content>
      </div>
    );
  }
}


export default isLoadingReducer ("messages")(MessageCard);
