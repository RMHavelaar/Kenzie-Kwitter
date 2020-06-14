import api from "../../utils/api";

export const GET_PHOTO_PENDING = "GET_PHOTO_PENDING";
export const GET_PHOTO_SUCCESS = "GET_PHOTO_SUCCESS";
export const GET_PHOTO_FAILURE = "GET_PHOTO_FAILURE";

export const getPhoto = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_PHOTO_PENDING });
    let username = getState().auth.username;
    const payload = await api.getPhoto(username);
    dispatch({ type: GET_PHOTO_SUCCESS, payload: payload });
  } catch (err) {
    dispatch({ type: GET_PHOTO_FAILURE, payload: err });
  }
};