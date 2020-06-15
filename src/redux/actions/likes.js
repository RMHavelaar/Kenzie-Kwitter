import api from "../../utils/api";
import { getMessagesFeed } from './messages';

export const ADD_LIKES = "ADD_LIKES"; 
export const ADD_LIKES_SUCCESS = "ADD_LIKES_SUCCESS";
export const ADD_LIKES_FAILURE = "ADD_LIKES_FAILURE";

export const REMOVE_LIKES = "REMOVE_LIKES";
export const REMOVE_LIKES_SUCCESS = "REMOVE_LIKES_SUCCESS";
export const REMOVE_LIKES_FAILURE = "REMOVE_LIKES_FAILURE";

export const addLike = (messageId) => async (dispatch, getState) => {
  const userName = getState().auth.username;
  try {
    dispatch({ type: ADD_LIKES});
    const payload = await api.addLike(messageId, userName);
    dispatch({ type: ADD_LIKES_SUCCESS, payload});
    dispatch(getMessagesFeed())
  } catch (err){
    dispatch({ type: ADD_LIKES_FAILURE, err});
  }
}

export const removeLike = (likeId) =>  async (dispatch, getState) => {
  try {
    dispatch({ type: REMOVE_LIKES});
    const payload = await api.removeLike(likeId);
    dispatch({ type: REMOVE_LIKES_SUCCESS, payload});
    dispatch(getMessagesFeed())
  } catch (err){
    dispatch({ type: REMOVE_LIKES_FAILURE, err});
  }
}