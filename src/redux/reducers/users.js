
import { ADDUSER, ADDUSER_SUCCESS, ADDUSER_FAILURE, } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  username: "",
  password: "",
  displayName: "",
  loading: false,
  error: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case ADDUSER_SUCCESS:
      const { username, displayName, password } = action.payload;
      return {
        ...INITIAL_STATE,
        username,
        displayName,
        password,
        loading: false,
      };
    case ADDUSER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};