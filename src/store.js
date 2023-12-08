import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasklistSlice from "./reducers/tasklist/tasklistSlice";

const reducer = combineReducers({
  tasklist: tasklistSlice,
  //add reducers here
});

export const store = configureStore({
  reducer: reducer,
});
