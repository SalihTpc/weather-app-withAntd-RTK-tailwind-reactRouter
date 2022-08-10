import { configureStore } from "@reduxjs/toolkit";
import citySlice from "./features/citySlice";
import searchSlice from "./features/searchSlice";

export default configureStore({
  reducer: { cities: citySlice, search: searchSlice },
});
