import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
  
  
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk))