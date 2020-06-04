import React from "react";
import { Link } from "react-router-dom";
import { AddUserContainer, MenuContainer } from "../components";

export const AddUserScreen = () => (
  <>
    <MenuContainer />
    <h2>Register New User</h2>
    <AddUserContainer />
    <hr />
    <Link to="/">Home</Link>
  </>
);
