import api from "../../utils/api";

// AUTH CONSTANTS
export const PROFILE_PENDING = "PROFILE_PENDING";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_FAILURE = "PROFILE_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/

// TODO: not sure if I should pass in username or credentials? 
export const profile = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PROFILE_PENDING });
    let username = getState().auth.username;
    const payload = await api.profile(username);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    dispatch({ type: PROFILE_SUCCESS, payload: payload });
  } catch (err) {
    dispatch({ type: PROFILE_FAILURE, payload: err });
  }
};

export const lookUpProfile = (username) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROFILE_PENDING });
    const payload = await api.profile(username);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    dispatch({ type: PROFILE_SUCCESS, payload: payload });
  } catch (err) {
    dispatch({ type: PROFILE_FAILURE, payload: err });
  }
};