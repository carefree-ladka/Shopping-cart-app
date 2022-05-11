import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const res = await fetch("http://localhost:5000/products");
      return await res.json();
    } catch (error) {
      console.error(error.message);
    }
  }
);
const initialState = {
  loading: false,
  hasErrors: "",
  products: [],
  filterData: null,
  activeCategory: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state, { payload }) => {
      state.filterData = state.data.filter((product) => {
        return product.category === payload.categoryId;
      });
      state.activeCategory = payload.activeCategory;
    },
    removeFilters: (state) => {
      state.filterData = null;
      state.activeCategory = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.hasErrors = action.error.message;
      });
  },
});

export const { filterByCategory, removeFilters } = productsSlice.actions;
const productsReducer = productsSlice.reducer;
export default productsReducer;
