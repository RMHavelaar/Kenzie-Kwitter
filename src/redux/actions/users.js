import api from "../../utils/api";

export const ADDUSER = "ADDUSER";
export const ADDUSER_SUCCESS = "ADDUSER_SUCCESS";
export const ADDUSER_FAILURE = "ADDUSER_FAILURE";

export const GETUSERLIST = "GETUSERLIST"; 
export const GETUSERLIST_SUCCESS = "GETUSERLIST_SUCCESS";
export const GETUSERLIST_FAILURE = "GETUSERLIST_FAILURE";

export const REMOVE_USERLIST = "REMOVE_GETUSERLIST";
export const REMOVE_USERLIST_SUCCESS = "REMOVE_GETUSERLIST_SUCCESS";
export const REMOVE_USERLIST_FAILURE = "REMOVE_GETUSERLIST_FAILURE";

/*
 ADDUSER ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const addUser = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADDUSER });
    const payload = await api.addUser(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: ADDUSER_SUCCESS, payload });
  } catch (err) {
    dispatch({ type: ADDUSER_FAILURE });
  }
};

export const getUserList = (Id) => async (dispatch, getState) => {
  // const userName = getState().auth.username;
  try {
    dispatch({ type: GETUSERLIST});
    const payload = await api.addMessage(getUserListId);
    dispatch({ type: GETUSERLIST_SUCCESS, payload});
  } catch (err){
    dispatch({ type: GETUSERLIST_FAILURE, err});
  }
}

export const removeGetUserlist = (getUserListId) =>  async (dispatch, getState) => {
  const userName = getState().auth.username;
  try {
    dispatch({ type: REMOVE_GETUSERLIST});
    const payload = await api.removeMessage(MessageId);
    dispatch({ type: REMOVE_GETUSERLIST_SUCCESS, payload});
  } catch (err){
    dispatch({ type: REMOVE_GETUSERLIST_FAILURE, err});
  }
}