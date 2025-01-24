import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import todoSlice from "./reducers/todoSlice";
import themeSlice from "./reducers/themeSlice";
import layoutSlice from "./reducers/layoutSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    todos: todoSlice,
    theme: themeSlice,
    layout: layoutSlice,
  },
});

export default store;
