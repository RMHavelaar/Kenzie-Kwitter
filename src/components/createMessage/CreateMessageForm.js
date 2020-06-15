import React, { useState } from "react";
import { Loader } from "../loader";
import { Button, Card } from "react-bootstrap";

export const PostMessage = ({
  createMessage,
  getMessagesFeed,
  loading,
  error,
}) => {
  const [state, setState] = useState({
    text: "",
  });

  const sendMessage = (event) => {
    event.preventDefault();
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
          <Card id="createMessageCard">
            <Card.Header>Post a Message</Card.Header>
            <Card.Body>
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
                  disabled={loading}
                >
                  Post
                  {loading && <Loader />}
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
