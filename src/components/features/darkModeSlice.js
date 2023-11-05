import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: "light", // Initial state is light mode
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
    setDarkMode: (state) => "dark", // Directly set to "dark"
    setMode: (state, action) => action.payload, // Directly assign the localTheme value to the state
  },
});

export const { toggleTheme, setDarkMode, setMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
