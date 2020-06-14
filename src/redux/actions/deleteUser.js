import api from "../../utils/api";

export const DELETEUSER_PENDING = "DELETEUSER_PENDING";
export const DELETEUSER_SUCCESS = "DELETEUSER_SUCCESS";
export const DELETEUSER_FAILURE = "DELETEUSER_FAILURE";


export const deleteUser = (username) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETEUSER_PENDING });
    const payload = await api.deleteUser(username);
    dispatch({ type: DELETEUSER_SUCCESS, payload: payload });
  } catch (err) {
    dispatch({ type: DELETEUSER_FAILURE, payload: err });
  }
};