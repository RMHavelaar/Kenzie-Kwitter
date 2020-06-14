import {
  GET_LIST_MESSAGES,
  CREATE_MESSAGE,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAILURE,
} from "../actions";

const INITIAL_STATE = {
  messages: [],
  text: "",
};

export const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST_MESSAGES: {
      const { messages } = action.payload;
      return {
        ...state,
        messages,
      };
    }
    case CREATE_MESSAGE: {

      return {
        ...state,

        loading: true,
      };
    }

    case CREATE_MESSAGE_SUCCESS:
      const { text } = action.payload;
      return {

        ...INITIAL_STATE,
        text,
        loading: false,
        
      };
    case CREATE_MESSAGE_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

