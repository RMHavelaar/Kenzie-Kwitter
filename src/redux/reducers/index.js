import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from "./users";
import { profileReducer } from "./profile";

export default combineReducers({ auth: authReducer, users: userReducer, profile: profileReducer });
