import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

const giftSlice = createSlice({
  name: "gifts",
  initialState,
  reducers: {},
});

export default giftSlice.reducer;
