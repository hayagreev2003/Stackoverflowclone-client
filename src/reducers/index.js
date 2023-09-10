import { combineReducers } from "redux";
import authReducer from "./auth";
import { currentUserReducer } from "./currentUser";
import { questionsReducer } from './questions';
import  usersReducer  from './users';
import postsReducer from "./post";
import errorReducer from "./error";

export default combineReducers({
    authReducer, currentUserReducer, questionsReducer, usersReducer,postsReducer, errorReducer
})