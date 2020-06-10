import api from "../../utils/api";

export const ADD_MESSAGES = "ADD_MESSAGES"; 
export const ADD_MESSAGES_SUCCESS = "ADD_MESSAGES_SUCCESS";
export const ADD_MESSAGE_FAILURE = "ADD_MESSAGE_FAILURE";

export const REMOVE_MESSAGES = "REMOVE_MESSAGES";
export const REMOVE_MESSAGES_SUCCESS = "REMOVE_MESSAGES_SUCCESS";
export const REMOVE_MESSAGES_FAILURE = "REMOVE_MESSAGES_FAILURE";

export const addMessages = (messageId) => async (dispatch, getState) => {
  // const userName = getState().auth.username;
  try {
    dispatch({ type: ADD_MESSAGES});
    const payload = await api.addMessage(messageId);
    dispatch({ type: ADD_MESSAGES_SUCCESS, payload});
  } catch (err){
    dispatch({ type: ADD_MESSAGES_FAILURE, err});
  }
}

export const removeMessages = (messageId) =>  async (dispatch, getState) => {
  const userName = getState().auth.username;
  try {
    dispatch({ type: REMOVE_MESSAGES});
    const payload = await api.removeMessage(MessageId);
    dispatch({ type: REMOVE_MESSAGES_SUCCESS, payload});
  } catch (err){
    dispatch({ type: REMOVE_MESSAGES_FAILURE, err});
  }
}