import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import totally from "./totally";

export default combineReducers({ totally, visibilityFilter });
