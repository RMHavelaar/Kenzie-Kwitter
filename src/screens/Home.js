import React from "react";
import { LoginFormContainer, MenuContainer, AddUserContainer } from "../components";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <LoginFormContainer />
    {/* TODO add a route to the registration form instead of having it on home screen */}
    <hr />
    <h3>Register New User</h3>
    <AddUserContainer />
  </>
);
