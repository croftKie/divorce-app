import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./features/eventSlice";
import giftSlice from "./features/giftSlice";
import todoSlice from "./features/todoSlice";

export const store = configureStore({
  reducer: {
    events: eventSlice,
    gifts: giftSlice,
    todo: todoSlice,
  },
});
