// TODO: implement
import { REMOVE_MESSAGES, REMOVE_MESSAGES_SUCCESS, REMOVE_MESSAGES_FAILURE } from "../actions";

export const REMOVE_MESSAGES = "REMOVE_MESSAGES";
export const REMOVE_MESSAGES_SUCCESS = "REMOVE_MESSAGES_SUCCESS";
export const REMOVE_MESSAGES_FAILURE = "REMOVE_MESSAGES_FAILURE";

export const messagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REMOVE_MESSAGES:
            return {
                ...state,
                loading: true
            }
        case REMOVE_LIKES_SUCCESS:
            return {
                ...state,
                loading: false
             }    
        case REMOVE_LIKES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }  
        
        default:
            return state
    }       
}                    