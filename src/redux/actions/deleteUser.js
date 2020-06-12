import api from "../../utils/api";
import {login} from "./auth";

// AUTH CONSTANTS
export const DELETEUSER_PENDING = "DELETEUSER_PENDING";
export const DELETEUSER_SUCCESS = "DELETEUSER_SUCCESS";
export const DELETEUSER_FAILURE = "DELETEUSER_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/

export const deleteUser = (username) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETEUSER_PENDING });
    const payload = await api.deleteUser(username);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    dispatch({ type: DELETEUSER_SUCCESS, payload: payload });
    dispatch(login());
  } catch (err) {
    dispatch({ type: DELETEUSER_FAILURE, payload: err });
  }
};