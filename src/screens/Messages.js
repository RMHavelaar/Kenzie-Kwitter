import React from "react";
import { Link } from "react-router-dom";
import { MessagesContainer, MenuContainer,  } from "../components";
import "./Home.css";

export const MessagesScreen = () => (
    <>
    <MenuContainer/>
    <div className ="title" style={{position:"relative", left:"35%"}}><h4>Message Feed</h4></div>
    <MessagesContainer/>
    {/* <NewMessageFormContainer /> */}
    <Link to="/" className="link">
        Home
    </Link>
    </>
);
