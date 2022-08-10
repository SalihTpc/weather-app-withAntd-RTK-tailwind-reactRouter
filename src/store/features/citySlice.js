import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "city",
  initialState: {
    cities: [],
  },
  reducers: {
    addCity: (state, action) => {
      const newCity = {
        name: action.payload.name,
        result: action.payload,
      };
      state.cities.push(newCity);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCity } = citySlice.actions;

export default citySlice.reducer;
