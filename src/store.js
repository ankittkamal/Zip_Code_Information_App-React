import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./components/features/darkModeSlice";
import locationReducer from "./components/utils/locationSlice";
const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    location: locationReducer,
  },
});

export default store;
