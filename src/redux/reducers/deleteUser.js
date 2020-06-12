import { DELETEUSER_PENDING, DELETEUSER_SUCCESS, DELETEUSER_FAILURE } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  loading: false,
  error: "",
};

export const deleteUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETEUSER_PENDING:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case DELETEUSER_SUCCESS:
      return {
        ...INITIAL_STATE,
        user: {},
        loading: false,
      };
    case DELETEUSER_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};