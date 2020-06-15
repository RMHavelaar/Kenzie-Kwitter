import React from "react";
import {
  MessagesContainer,
  MenuContainer,
  PostMessageContainer,
} from "../components";
import "./Home.css";

export const MessagesScreen = () => (
  <>
    <MenuContainer />
    <div id="maybe">
      <PostMessageContainer />
      <MessagesContainer />
    </div>
  </>
);
