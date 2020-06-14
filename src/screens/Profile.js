import React from "react";
import {
  MenuContainer,
  ProfileContainer,
  GetUserListContainer,
} from "../components";
import "./Home.css";

export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <div id="profileAndUserList">
      <div id="profileContainer">
        <ProfileContainer />
      </div>
      <div id="userListContainer">
        <GetUserListContainer />
      </div>
    </div>
  </>
);
