import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getVideos = createAsyncThunk("videos/getvideos", async () => {
  const response = await fetch("/api/videos");
  const data = await response.json();
  return data.videos;
});

const initialState = {
  videosArr: [],

  loading: false,
  dummyText: "loream prism",
};

const videoSlice = createSlice({
  name: "videos",

  initialState,
  reducers: {
    changeDummyTextValue: (state) => {
      state.dummyText = "newValue for dummyText";
    },
  },

  extraReducers: {
    [getVideos.fulfilled]: (state, action) => {
      state.videosArr = action.payload;
    },
  },
});
export const { changeDummyTextValue } = videoSlice.actions;
export default videoSlice.reducer;
