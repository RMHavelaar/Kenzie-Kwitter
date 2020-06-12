import React from "react";
import { Link } from "react-router-dom";
import { LoginFormContainer, MenuContainer } from "../components";
import "./Home.css";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <div className="title"><h5>Your favorite microblogging platform</h5></div>
    <LoginFormContainer />
    <Link to="/register" className="link">Register New User</Link>
  </>
);
