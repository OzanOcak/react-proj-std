import { GET_OTHERS, GET_LATEST } from "../types";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_LATEST:
      return { ...state, latestNews: action.payload };
    case GET_OTHERS:
      return { ...state, otherNews: action.payload };
    default:
      return state;
  }
}
