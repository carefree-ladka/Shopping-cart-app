import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const sortCategories = (arr) => arr.sort((a, b) => a.order - b.order);
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const res = await fetch("http://localhost:5000/categories");
    const categories = await res.json();
    return sortCategories(categories);
  }
);
const initialState = {
  loading: false,
  hasErrors: "",
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.hasErrors = action.error.message;
      });
  },
});

const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;
