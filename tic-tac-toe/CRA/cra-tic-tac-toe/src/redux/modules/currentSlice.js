import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentTurn: true };

const currentSlice = createSlice({
  name: "current",
  initialState,
  reducer: {
    turnChange: (state, action) => {
      state.currentTurn = action.payload;
    },
  },
});

export const { turnChange } = currentSlice.actions;
export default currentSlice.reducer;
