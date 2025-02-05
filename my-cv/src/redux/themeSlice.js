import { createSlice } from "@reduxjs/toolkit";

// Initial state for theme management
const initialState = {
  darkMode: false, // Boolean to track dark mode status
};

// Redux slice for managing theme state (light/dark mode)
const themeSlice = createSlice({
  name: "theme", // Name of the slice
  initialState,
  reducers: {
    // Toggles the dark mode state
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// Export the action to toggle the theme
export const { toggleTheme } = themeSlice.actions;
// Export the reducer to be used in the store
export default themeSlice.reducer;
