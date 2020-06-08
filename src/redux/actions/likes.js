import api from "../../utils/api";

export const ADD_LIKES = "ADD_LIKES"; 
export const ADD_LIKES_SUCCESS = "ADD_LIKES_SUCCESS";
export const ADD_LIKES_FAILURE = "ADD_LIKES_FAILURE";

export const addLikes = (messageId) => async (dispatch, getState) => {
  const userName = getState().auth.username;
  try {
    dispatch({ type: ADD_LIKES});
    const payload = await api.addLike(messageId);
    dispatch({ type: ADD_LIKES_SUCCESS, payload});
  } catch (err){
    dispatch({ type: ADD_LIKES_FAILURE, err});
  }
}
