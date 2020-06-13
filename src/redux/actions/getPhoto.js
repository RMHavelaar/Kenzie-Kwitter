import api from "../../utils/api";

// AUTH CONSTANTS
export const GET_PHOTO_PENDING = "GET_PHOTO_PENDING";
export const GET_PHOTO_SUCCESS = "GET_PHOTO_SUCCESS";
export const GET_PHOTO_FAILURE = "GET_PHOTO_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/

export const getPhoto = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_PHOTO_PENDING });
    let username = getState().auth.username;
    const payload = await api.getPhoto(username);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    dispatch({ type: GET_PHOTO_SUCCESS, payload: payload });
  } catch (err) {
    dispatch({ type: GET_PHOTO_FAILURE, payload: err });
  }
};