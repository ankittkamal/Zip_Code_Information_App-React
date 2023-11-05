import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: "light", // Initial state is light mode
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
    setDarkMode: (state) => (state.darkMode = "dark"),
    setMode: (state) => (state === "dark" ? "dark" : "light"),
  },
});

export const { toggleTheme, setDarkMode, setMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
