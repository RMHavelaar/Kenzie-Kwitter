import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from "./users";
import { likesReducer } from "./likes";

export default combineReducers({ auth: authReducer, users: userReducer, likes: likesReducer });
