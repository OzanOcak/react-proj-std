import { combineReducers } from "redux";
import articles from "./articles_reducers";

const rootReducers = combineReducers({ articles });

export default rootReducers;
