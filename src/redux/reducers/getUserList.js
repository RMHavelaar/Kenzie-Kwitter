import {
    GETUSERLIST,
    GETUSERLIST_SUCCESS,
    GETUSERLIST_FAILURE,
  } from "../actions";

  const INITIAL_STATE = {
    usersList: [],
    loading: false,
    error: "",
  };
  
  export const userListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GETUSERLIST:
        return {
          ...INITIAL_STATE,
          loading: true,
        };
  
      case GETUSERLIST_SUCCESS:
        return {
          ...INITIAL_STATE,
          usersList: action.payload.users,
          loading: false,
        };
  
      case GETUSERLIST_FAILURE:
        return {
          ...INITIAL_STATE,
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  };
  
