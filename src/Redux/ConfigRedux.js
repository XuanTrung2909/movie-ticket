import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
import { MovieReducer } from "./Reducers/MovieReducer";

const rootReducer = combineReducers({
  MovieReducer: MovieReducer,
  
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk))