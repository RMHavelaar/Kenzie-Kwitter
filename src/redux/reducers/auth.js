import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  GOOGLE_LOGIN,
  GOOGLE_LOGIN_FAILURE,
  GOOGLE_LOGIN_SUCCESS,
} from "../actions";

const INITIAL_STATE = {
  isAuthenticated: false,
  username: "",
  loading: false,
  error: "",
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case LOGIN_SUCCESS:
      const { username, token } = action.payload;
      return {
        ...INITIAL_STATE,
        isAuthenticated: token,
        username,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
      case GOOGLE_LOGIN:
        return {
          ...INITIAL_STATE,
          loading: true,
        };
      case GOOGLE_LOGIN_SUCCESS:
        return {
          ...INITIAL_STATE,
          isAuthenticated: action.payload.token,
          username: action.payload.username,
          loading: false,
      };
      case GOOGLE_LOGIN_FAILURE: 
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

