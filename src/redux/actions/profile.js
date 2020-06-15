import api from "../../utils/api";

export const PROFILE_PENDING = "PROFILE_PENDING";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_FAILURE = "PROFILE_FAILURE";


export const profile = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PROFILE_PENDING });
    let username = getState().auth.username;
    const payload = await api.profile(username);
    dispatch({ type: PROFILE_SUCCESS, payload: payload });
  } catch (err) {
    dispatch({ type: PROFILE_FAILURE, payload: err });
  }
};

