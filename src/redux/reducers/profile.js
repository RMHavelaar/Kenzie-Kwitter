import { PROFILE_PENDING, PROFILE_SUCCESS, PROFILE_FAILURE } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  pictureLocation: "",
  username: "",
  displayName: "",
  about: "",
  googleId: null,
  createdAt: "",
  updatedAt: "",
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
        username: action.payload.user.username,
        pictureLocation: action.payload.user.pictureLocation,
        displayName: action.payload.user.displayName,
        about: action.payload.user.about,
        googleId: null,
        createdAt: action.payload.user.createdAt,
        updatedAt: action.payload.user.updatedAt,
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
