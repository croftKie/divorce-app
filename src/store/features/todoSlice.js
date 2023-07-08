import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actiontodo: JSON.parse(localStorage.getItem("todos")) || [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setActionToDo: (state, action) => {
      state.actiontodo.push(action.payload);
      // console.log(actiontodo);
    },
  },
});

export const { setActionToDo } = todoSlice.actions;

export const selectActionToDo = (state) => state.todo.actiontodo;

export default todoSlice.reducer;
