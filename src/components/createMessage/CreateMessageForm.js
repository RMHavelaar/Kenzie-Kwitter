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
    setTimeout(() => getMessagesFeed(), 1000);
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
            <Card.Body id="inputBar">
              <Card.Text>
                <input
                  id="inputField"
                  type="text"
                  name="text"
                  placeholder="Share your thoughts with the world...#goTeamK"
                  value={state.text}
                  onChange={handleChange}
                />
                <Button
                  variant="primary"
                  type="submit"
                  disabled={loading}
                  id="postButton"
                >
                  Post
                </Button>
                {loading && <Loader />}
              </Card.Text>
            </Card.Body>
          </Card>
        </form>
      </div>
    </React.Fragment>
  );
};

export default PostMessage;
