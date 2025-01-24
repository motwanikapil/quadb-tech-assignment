import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layout: localStorage.getItem("layout") || "list",
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleLayout(state, action) {
      state.layout = state.layout === "list" ? "grid" : "list";
      localStorage.setItem("layout", state.layout);
    },
  },
});

export const { toggleLayout } = layoutSlice.actions;

export default layoutSlice.reducer;
