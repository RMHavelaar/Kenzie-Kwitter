// TODO: implement
import { 
    ADD_LIKES, 
    ADD_LIKES_SUCCESS,
    ADD_LIKES_FAILURE,
    REMOVE_LIKES,
    REMOVE_LIKES_SUCCESS,
    REMOVE_LIKES_FAILURE
} from "../actions"

// INITIAL STATE
const INITIAL_STATE = {
    loading: false,
    error: "",
  };

export const likesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_LIKES:
            return {
                ...state,
                loading: true
            }
        case ADD_LIKES_SUCCESS:
            return {
                ...state,
                loading: false
            }    
        case ADD_LIKES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }    

        case REMOVE_LIKES:
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