import axios from "axios";
import {
  CLEAR_ARTICLE_DATA,
  GET_ARTICLE_DATA,
  GET_LATEST,
  GET_OTHERS,
  HANDLE_LIKES_ARTICLE,
} from "../types";
const URL = "http://localhost:5000/articles";

export function latestNews() {
  const request = axios
    .get(`${URL}?_order=desc&_end=2`)
    .then((res) => res.data);

  return {
    type: GET_LATEST,
    payload: request,
  };
}

export function otherNews() {
  const request = axios
    .get(`${URL}?_order=desc&_start=3&_end=15`)
    .then((res) => res.data);

  return {
    type: GET_OTHERS,
    payload: request,
  };
}

export function getArticleData(id) {
  const request = axios.get(`${URL}?id=${id}`).then((res) => res.data);

  return {
    type: GET_ARTICLE_DATA,
    payload: request,
  };
}

export function handleLikesArticle(newLikes, id) {
  const request = axios(`${URL}/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ likes: newLikes }),
  }).then((response) => response.data);
  return { type: HANDLE_LIKES_ARTICLE, payload: request };
}

export function clearArticleData() {
  return {
    type: CLEAR_ARTICLE_DATA,
    payload: null,
  };
}
