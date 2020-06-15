import api from "../../utils/api";

export const REMOVE_MESSAGES = "REMOVE_MESSAGES";
export const REMOVE_MESSAGES_SUCCESS = "REMOVE_MESSAGES_SUCCESS";
export const REMOVE_MESSAGES_FAILURE = "REMOVE_MESSAGES_FAILURE";
export const GET_MESSAGE = "GET_MESSAGE";
export const GET_LIST_MESSAGES = "GET_LIST_MESSAGES";
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const CREATE_MESSAGE_SUCCESS = "CREATE_MESSAGE_SUCCESS";
export const CREATE_MESSAGE_FAILURE = "CREATE_MESSAGE_FAILURE";

export const getMessagesFeed = () => async (dispatch, getState) => {
  try {
    const payload = await api.getMessages();

    dispatch({ type: GET_LIST_MESSAGES, payload });
  } catch (err) {}
};

export const createMessage = (ids) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_MESSAGE });
    const payload = await api.createMessage(ids);
    dispatch({ type: CREATE_MESSAGE_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: CREATE_MESSAGE_FAILURE, payload: err.messages });
  }
};

