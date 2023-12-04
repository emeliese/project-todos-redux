import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [{ complete: true, desc: "make a list" }],
};

const tasklistSlice = createSlice({
  name: "tasklist",
  initialState,
  reducers: {
    completeTask: () => {
      state.complete = true;
    },
  },
  openTask: () => {
    state.complete = false;
  },
  addTask: (state, { payload }) => {
    state.list.push(payload);
  },
});

export const { completeTask, openTask } = tasklistSlice.actions;

export default tasklistSlice.reducer;
