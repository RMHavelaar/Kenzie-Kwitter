import { PROFILE_PENDING, PROFILE_SUCCESS, PROFILE_FAILURE } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  user: {},
  loading: false,
  error: "",
};

export const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_PENDING:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case PROFILE_SUCCESS:
      return {
        ...INITIAL_STATE,
        user: action.payload,
        loading: false,
      };
    case PROFILE_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};