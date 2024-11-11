import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./slice";
const store = configureStore({
  reducer: {
    image: imageReducer,
  },
});

export default store;
