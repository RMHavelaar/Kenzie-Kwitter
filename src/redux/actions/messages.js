import api from "../../utils/api";

export const REMOVE_MESSAGES = "REMOVE_MESSAGES";
export const REMOVE_MESSAGES_SUCCESS = "REMOVE_MESSAGES_SUCCESS";
export const REMOVE_MESSAGES_FAILURE = "REMOVE_MESSAGES_FAILURE";

export const removeMessages = (messageId) =>  async (dispatch, getState) => {
  const userName = getState().auth.username;
  try {
    dispatch({ type: REMOVE_MESSAGES});
    const payload = await api.removeMessage(messageId);
    dispatch({ type: REMOVE_MESSAGES_SUCCESS, payload});
  } catch (err){
    dispatch({ type: REMOVE_MESSAGES_FAILURE, err});
  }
}