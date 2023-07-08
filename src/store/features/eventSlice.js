import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: JSON.parse(localStorage.getItem("todos")) || [],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
      localStorage.setItem(
        "todos",
        JSON.stringify([...state.events, action.payload])
      );
    },
  },
});
export const { addEvent } = eventSlice.actions;

export const eventSelector = (state) => state.events.events;

export default eventSlice.reducer;
