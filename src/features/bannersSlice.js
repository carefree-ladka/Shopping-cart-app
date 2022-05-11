import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBanners = createAsyncThunk("banners/fetchBanners", async () => {
  const res = await fetch("http://localhost:5000/banners");
  return await res.json();
});
const initialState = {
  loading: false,
  hasErrors: "",
  banners: [],
};

export const bannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanners.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.banners = action.payload;
        state.loading = false;
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.loading = false;
        state.hasErrors = action.error.message;
      });
  },
});

const bannersReducer = bannersSlice.reducer;
export default bannersReducer;
