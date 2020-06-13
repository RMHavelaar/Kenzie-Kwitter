import React from "react";
import { MenuContainer, ProfileContainer } from "../components";
import GetUserList from '../components/getuserlist/GetUserList';

export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <ProfileContainer />
    <GetUserList />
  </>
);
