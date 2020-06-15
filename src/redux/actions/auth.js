import api from "../../utils/api";

export const LOGIN = "AUTH/LOGIN";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH/LOGIN_FAILURE";
export const LOGOUT = "AUTH/LOGOUT";
export const GOOGLE_LOGIN = "AUTH/GOOGLE_LOGIN";
export const GOOGLE_LOGIN_SUCCESS = "AUTH/GOOGLE_LOGIN_SUCCESS";
export const GOOGLE_LOGIN_FAILURE = "AUTH/GOOGLE_LOGIN_FAILURE";


export const login = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN });
    const payload = await api.login(credentials);
    dispatch({ type: LOGIN_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.message,
    });
  }
};

export const loginGoogle = (data) => {
  return {
    type: GOOGLE_LOGIN_SUCCESS,
   payload:data
 }
 } 


export const logout = () => async (dispatch, getState) => {
  try {
    // We do not care about the result of logging out
    // as long as it succeeds
    await api.logout();
  } finally {
    /**
     * Let the reducer know that we are logged out
     */
    dispatch({ type: LOGOUT });
    localStorage.clear();
  }
};

