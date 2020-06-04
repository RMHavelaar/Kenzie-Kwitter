import React from "react";
import { Link } from "react-router-dom";
import { LoginFormContainer, MenuContainer } from "../components";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <LoginFormContainer />
    <hr />
    <Link to="/register">Register New User</Link>
  </>
);
