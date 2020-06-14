import api from "../../utils/api";

export const REMOVE_MESSAGES = "REMOVE_MESSAGES";
export const REMOVE_MESSAGES_SUCCESS = "REMOVE_MESSAGES_SUCCESS";
export const REMOVE_MESSAGES_FAILURE = "REMOVE_MESSAGES_FAILURE";
export const GET_MESSAGE = "GET_MESSAGE";
export const GET_LIST_MESSAGES = "GET_LIST_MESSAGES";
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const getMessagesList = () => async (dispatch, getState) => {
  try {
    const payload = await api.getMessages();
    console.log(payload);
    dispatch({ type: GET_LIST_MESSAGES, payload });
  } catch (err) {
    console.log(err);
  }
};


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