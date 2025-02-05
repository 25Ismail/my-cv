import { createSlice } from "@reduxjs/toolkit";

// Redux slice for managing contact messages.
const contactSlice = createSlice({
  name: "contact", // Name of the slice
  initialState: {
    messages: [], // Array to store contact messages
  },
  reducers: {
    // Reducer to add a new message to the state
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

// Export the action creator for adding a message
export const { addMessage } = contactSlice.actions;
// Export the reducer to be used in the store
export default contactSlice.reducer;
