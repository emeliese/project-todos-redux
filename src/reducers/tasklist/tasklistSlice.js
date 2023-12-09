import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, complete: true, content: "make a list" },
    { id: 2, complete: false, content: "check it twice" },
  ],
};

export const tasklist = createSlice({
  name: "tasklist",
  initialState,
  reducers: {
    toggleCheck: (state, action) => {
      const { id } = action.payload;
      let checked = state.list.find((el) => el.id === id);
      console.log("content", checked.content, "id", checked.id);
      checked.complete = !checked.complete;
    },

    addTask: (state, action) => {
      const { id, content } = action.payload;
      state.list.push({ id, complete: false, content });
    },

    removeTask: (state, action) => {
      const { id } = action.payload;
      state.list = state.list.filter((el) => el.id !== id);
    },
  },
});

export const { completeTask, openTask, addTask } = tasklist.actions;

export default tasklist.reducer;
