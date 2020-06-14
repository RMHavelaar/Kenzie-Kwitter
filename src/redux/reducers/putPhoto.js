import { PHOTO_PENDING, PHOTO_SUCCESS, PHOTO_FAILURE } from "../actions";

const INITIAL_STATE = {
  picture: null,
  loading: false,
  error: "",
};

export const putPhotoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PHOTO_PENDING:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case PHOTO_SUCCESS:
      return {
        ...INITIAL_STATE,
        picture: action.payload,
        loading: false,
      };
    case PHOTO_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};