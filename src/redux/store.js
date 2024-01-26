import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducerAddBooks from "./reducers/reducerAddBooks";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  library: reducerAddBooks,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
