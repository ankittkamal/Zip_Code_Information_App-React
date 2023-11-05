// actions.js
import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    data: null,
  },
  reducers: {
    setLocationData: (state, action) => {
      state.data = action.payload;
    },
    clearLocationData: (state) => {
      state.data = null;
    },
  },
});

export const { setLocationData, setLoading, setError, clearLocationData } =
  locationSlice.actions;

export default locationSlice.reducer;
