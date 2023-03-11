import {
  GET_OTHERS,
  GET_LATEST,
  GET_ARTICLE_DATA,
  CLEAR_ARTICLE_DATA,
  HANDLE_LIKES_ARTICLE,
} from "../types";

export default function articles(state = {}, action) {
  switch (action.type) {
    case GET_LATEST:
      return { ...state, latestNews: action.payload };
    case GET_OTHERS:
      return { ...state, otherNews: action.payload };
    case GET_ARTICLE_DATA:
      return { ...state, articleData: action.payload };
    case HANDLE_LIKES_ARTICLE:
      return { ...state, articleData: [action.payload] };
    case CLEAR_ARTICLE_DATA:
      return { ...state, articleData: action.payload };
    default:
      return state;
  }
}
