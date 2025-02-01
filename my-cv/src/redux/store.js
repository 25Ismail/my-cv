import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice.js";
import contactReducer from "./contactSlice.js";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    contact: contactReducer,
  },
});

export default store;
