import { createSlice } from "@reduxjs/toolkit";
function capitalize(word) {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}

export const searchSlice = createSlice({
  name: "city",
  initialState: {
    city: [],
  },
  reducers: {
    setSearch: (state, action) => {
      state.city.push(capitalize(action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
