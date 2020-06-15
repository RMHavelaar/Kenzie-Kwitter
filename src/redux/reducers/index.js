import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from "./users";
import { profileReducer } from "./profile";
import { likesReducer } from "./likes";
import { messageReducer } from "./messages";
import { userListReducer } from "./getUserList";
export default combineReducers({ auth: authReducer, users: userReducer, profile: profileReducer, likes: likesReducer, messages: messageReducer, usersList: userListReducer });
