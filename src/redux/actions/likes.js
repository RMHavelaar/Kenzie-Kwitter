import api from "../../utils/api";

export const ADD_LIKES = "ADDLIKES";
export const REMOVE_LIKES = "REMOVELIKES";
import { ADD_LIKES, REMOVE_LIKES } from "../actions";

export function userLikes(userLikesCompleted) {
    return {
      type: ADD_LIKES, 
      messageId: userLikesCompleted,

    }
  }

export function userRemoveLikes(userLikesRemoved) {
    return {
      type: REMOVE_LIKES,
      messageId: userLikesRemoved,
    }
  }  