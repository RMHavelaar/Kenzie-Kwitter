import React from "react";
import { Link } from "react-router-dom";
import { MessagesContainer, MenuContainer, NewMessageFormContainer } from "../components";
import "./Home.css";

export const MessagesScreen = () => (
    <>
    <MenuContainer/>
    <div className ="title"><h5>Messages</h5></div>
    <MessagesContainer/>
    {/* <NewMessageFormContainer /> */}
    <Link to="/" className="link">
        Home
    </Link>
    </>
);
