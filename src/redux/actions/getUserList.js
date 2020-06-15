import api from "../../utils/api";

export const GETUSERLIST = "GETUSERLIST";
export const GETUSERLIST_SUCCESS = "GETUSERLIST_SUCCESS";
export const GETUSERLIST_FAILURE = "GETUSERLIST_FAILURE";

export const getUserList = () => async (dispatch) => {
    try {
      dispatch({ type: GETUSERLIST });
      const payload = await api.getUserList();
      dispatch({ type: GETUSERLIST_SUCCESS, payload });
    } catch (err) {
      dispatch({ type: GETUSERLIST_FAILURE, payload: err });
    }
  };