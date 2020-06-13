import api from "../../utils/api";
import {profile} from "./profile";

// AUTH CONSTANTS
export const PHOTO_PENDING = "PHOTO_PENDING";
export const PHOTO_SUCCESS = "PHOTO_SUCCESS";
export const PHOTO_FAILURE = "PHOTO_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/

export const putPhoto = (picture) => async (dispatch, getState) => {
  try {
    dispatch({ type: PHOTO_PENDING });
    let username = getState().auth.username;
    const payload = await api.putPhoto(username, picture);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    dispatch({ type: PHOTO_SUCCESS, payload });
    dispatch(profile());
  } catch (err) {
    dispatch({ type: PHOTO_FAILURE, payload: err });
  }
};