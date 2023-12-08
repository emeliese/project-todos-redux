import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, complete: true, content: "make a list" },
    { id: 2, complete: false, content: "buy a boat" },
  ],
};

export const tasklist = createSlice({
  name: "tasklist",
  initialState,
  reducers: {
    completeTask: () => {
      state.complete = true;
    },
    openTask: () => {
      state.complete = false;
    },
    addTask: (state, action) => {
      const { id, content } = action.payload;
      state.list.push({ id, content, complete: false });
    },
  },
});

export const { completeTask, openTask, addTask } = tasklist.actions;

export default tasklist.reducer;
