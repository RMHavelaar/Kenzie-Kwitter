import api from "../../utils/api";

export const REMOVE_MESSAGES = "REMOVE_MESSAGES";
export const REMOVE_MESSAGES_SUCCESS = "REMOVE_MESSAGES_SUCCESS";
export const REMOVE_MESSAGES_FAILURE = "REMOVE_MESSAGES_FAILURE";
export const GET_MESSAGE = "GET_MESSAGE";
export const GET_LIST_MESSAGES = "GET_LIST_MESSAGES";
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const CREATE_MESSAGE_SUCCESS = "CREATE_MESSAGE_SUCCESS";
export const CREATE_MESSAGE_FAILURE = "CREATE_MESSAGE_FAILURE";

export const getMessagesList = () => async (dispatch, getState) => {
  try {
    const payload = await api.getMessages();

    dispatch({ type: GET_LIST_MESSAGES, payload });
  } catch (err) {}
};

export const createMessage = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_MESSAGE });
    const payload = await api.createMessage(credentials);
    dispatch({ type: CREATE_MESSAGE_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: CREATE_MESSAGE_FAILURE });
  }
};

// export const removeMessages = (messageId) =>  async (dispatch, getState) => {
//   const userName = getState().auth.username;
//   try {
//     dispatch({ type: REMOVE_MESSAGES});
//     const payload = await api.removeMessage(messageId);
//     dispatch({ type: REMOVE_MESSAGES_SUCCESS, payload});
//   } catch (err){
//     dispatch({ type: REMOVE_MESSAGES_FAILURE, err});
//   }
// }
