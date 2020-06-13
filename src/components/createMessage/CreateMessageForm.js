import React, { useState } from "react";

import { Button, Card, Container } from "react-bootstrap";

export const PostMessage = ({
  createMessage,
  listOfMessages,

  error,
}) => {
  const [state, setState] = useState({
    text: "",
  });

  const submitMessage = (event) => {
    event.preventDefault();
    createMessage(state);
    setState((prevState) => ({ ...prevState, text: "" }));
    setTimeout(listOfMessages, 50);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <Container>
        <form id="messageForm" onSubmit={submitMessage}>
          <Card border="info" style={{ marginBottom: "0px", width: "35%" }}>
            <Card>
              <Card.Header>Create Message</Card.Header>
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
      </Container>

      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {console.log(state)}
    </React.Fragment>
  );
};

export default PostMessage;
