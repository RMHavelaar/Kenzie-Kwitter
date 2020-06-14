import React from "react";
import { Link } from "react-router-dom";
import {
  MessagesContainer,
  MenuContainer,
  PostMessageContainer,
} from "../components";
import "./Home.css";

export const MessagesScreen = () => (
  <>
    <MenuContainer />
    <div className="title" style={{ position: "relative", left: "35%" }}>
      <h4>Message Feed</h4>
    </div>
    <MessagesContainer />
    <PostMessageContainer />
    <Link to="/" className="link">
      Home
    </Link>
  </>
);
