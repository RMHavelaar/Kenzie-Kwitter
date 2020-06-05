import React from "react";
import { Link } from "react-router-dom";
import { AddUserContainer, MenuContainer } from "../components";
import "./Home.css";

export const AddUserScreen = () => (
  <>
    <MenuContainer />
    <div className="title"><h5>Register New User</h5></div>
    <AddUserContainer />
    <Link to="/" className="link">
      Home
    </Link>
  </>
);
