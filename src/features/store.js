import { configureStore } from "@reduxjs/toolkit";
import bannersReducer from "./bannersSlice";
import cartReducer from "./cartSlice";
import categoriesReducer from "./categoriesSlice";
import productsReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    banners: bannersReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
