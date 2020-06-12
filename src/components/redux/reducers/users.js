
import { ADDUSER, ADDUSER_SUCCESS, ADDUSER_FAILURE, GETUSERLIST, GETUSERLIST_SUCCESS, GETUSERLIST_FAILURE } from "../actions";

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

    case GETUSERLIST:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
      
    case GETUSERLIST_SUCCESS:
      return {
        ...INITIAL_STATE,
        loading: true,
      };  

    case GETUSERLIST_FAILURE:
      return {
        ...INITIAL_STATE,
        loading: true,
      };    

    default:
      return state;
  }
};