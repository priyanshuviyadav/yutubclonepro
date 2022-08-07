import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await fetch("/api/categories");
    const data = await response.json();
    return data.categories;
  }
);

const initialState = {
  categoriesArr: [],

  loading: false,
  dummyText: "loream prism",
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    changeDummyTextValue: (state) => {
      state.dummyText = "newValue for dummyText";
    },
  },

  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      state.categoriesArr = action.payload;
    },
  },
});
export const { changeDummyTextValue } = categorySlice.actions;
export default categorySlice.reducer;
