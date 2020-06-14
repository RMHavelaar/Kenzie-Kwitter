import React, { useState } from "react";

import { Button, Card } from "react-bootstrap";

export const PostMessage = ({ createMessage, getMessagesFeed, error }) => {
  const [state, setState] = useState({
    text: "",
  });

  const sendMessage = (event) => {
    event.preventDefault();
    console.log("hello");
    createMessage(state);
    setState((prevState) => ({ ...prevState, text: "" }));
    setTimeout(getMessagesFeed(), 1000);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <div id="createMessageContainer">
        <form id="createMessageForm" onSubmit={sendMessage} style={{}}>
          <Card
            border="info"
            style={{
              width: "25rem",
              height: "8rem",
            }}
          >
            <Card.Header
              style={{
                backgroundColor: "#15202b",
                color: "#ffffff",
              }}
            >
              Post a Kweet
            </Card.Header>
            <Card.Body
              style={{
                backgroundColor: "#15202b",
                color: "#ffffff",
              }}
            >
              <Card.Text>
                <input
                  type="text"
                  name="text"
                  value={state.text}
                  onChange={handleChange}
                />
                <Button
                  style={{ backgroundColor: "#1DA1F2" }}
                  variant="primary"
                  type="submit"
                >
                  Kweet
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </form>
      </div>
    </React.Fragment>
  );
};

export default PostMessage;
