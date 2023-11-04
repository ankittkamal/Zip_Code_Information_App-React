import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  app: appSlice,
});

export default store;
