import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./slice/videoSlice";
import categoriesReducer from "./slice/categorySlice";
export default configureStore({
  reducer: {
    videos: videosReducer,
    categories: categoriesReducer,
  },
});
