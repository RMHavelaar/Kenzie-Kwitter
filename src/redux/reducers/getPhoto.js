import { GET_PHOTO_PENDING, GET_PHOTO_SUCCESS, GET_PHOTO_FAILURE } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  picture: null,
  loading: false,
  error: "",
};

export const getPhotoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PHOTO_PENDING:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case GET_PHOTO_SUCCESS:
      return {
        ...INITIAL_STATE,
        picture: action.payload,
        loading: false,
      };
    case GET_PHOTO_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};