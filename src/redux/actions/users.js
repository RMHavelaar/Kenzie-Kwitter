import api from "../../utils/api";

export const ADDUSER = "ADDUSER";
export const ADDUSER_SUCCESS = "ADDUSER_SUCCESS";
export const ADDUSER_FAILURE = "ADDUSER_FAILURE";

/*
 ADDUSER ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const addUser = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADDUSER });
    const payload = await api.addUser(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: ADDUSER_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: ADDUSER_FAILURE });
  }
};
