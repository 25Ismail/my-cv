import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice.js";
import contactReducer from "./contactSlice.js";

// Configures the Redux store with multiple reducers
const store = configureStore({
  reducer: {
    theme: themeReducer, // Manages theme-related state (e.g., dark mode)
    contact: contactReducer, // Manages contact messages
  },
});

export default store;
