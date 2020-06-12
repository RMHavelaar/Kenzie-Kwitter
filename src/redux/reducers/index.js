import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from "./users";
import { profileReducer } from "./profile";
import { likesReducer } from "./likes";
import { putPhotoReducer } from "./putPhoto";
import { getPhotoReducer } from "./getPhoto";
import { deleteUserReducer } from "./deleteUser";
export default combineReducers({ auth: authReducer, users: userReducer, profile: profileReducer, likes: likesReducer, putPhoto: putPhotoReducer, getPhoto: getPhotoReducer, deleteUser: deleteUserReducer });
