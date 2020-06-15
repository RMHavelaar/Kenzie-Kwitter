import api from "../../utils/api";

export const ADDUSER = "ADDUSER";
export const ADDUSER_SUCCESS = "ADDUSER_SUCCESS";
export const ADDUSER_FAILURE = "ADDUSER_FAILURE";

export const addUser = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADDUSER });
    const payload = await api.addUser(credentials);
    dispatch({ type: ADDUSER_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: ADDUSER_FAILURE, payload: err });
  }
};

