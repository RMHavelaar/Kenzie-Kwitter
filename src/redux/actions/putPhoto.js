import api from "../../utils/api";
import {profile} from "./profile";

export const PHOTO_PENDING = "PHOTO_PENDING";
export const PHOTO_SUCCESS = "PHOTO_SUCCESS";
export const PHOTO_FAILURE = "PHOTO_FAILURE";


export const putPhoto = (picture) => async (dispatch, getState) => {
  try {
    dispatch({ type: PHOTO_PENDING });
    let username = getState().auth.username;
    const payload = await api.putPhoto(username, picture);
    dispatch({ type: PHOTO_SUCCESS, payload });
    dispatch(profile());
  } catch (err) {
    dispatch({ type: PHOTO_FAILURE, payload: err });
  }
};