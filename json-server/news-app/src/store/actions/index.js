import axios from "axios";
import { GET_LATEST, GET_OTHERS } from "../types";
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
    .get(`${URL}?_order=desc_start=3&_end=15`)
    .then((res) => res.data);

  return {
    type: GET_OTHERS,
    payload: request,
  };
}
