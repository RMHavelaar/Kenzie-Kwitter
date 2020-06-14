import React, { useState } from "react";

import { Button, Card } from "react-bootstrap";

export const PostMessage = ({ createMessage, MessageFeed, error }) => {
  const [state, setState] = useState({
    text: "",
  });

  const sendMessage = (event) => {
    event.preventDefault();
    createMessage(state);
    setState((prevState) => ({ ...prevState, text: "" }));
    setTimeout(MessageFeed);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <div id="createMessageContainer" >
        <form id="createMessageForm" onSubmit={sendMessage}>
          <Card border="info" style={{width:"300px", position:""}}>
            <Card>
              <Card.Header>Start your Message</Card.Header>
              <Card.Body>
                <Card.Text>
                  <input
                    type="text"
                    name="text"
                    value={state.text}
                    onChange={handleChange}
                  />
                  <Button variant="primary">Post</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Card>
        </form>
      </div>
    </React.Fragment>
  );
};

export default PostMessage;
