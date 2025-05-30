import { configureStore, createReducer } from "@reduxjs/toolkit";
import productSlice from "../Redux/slice/productSlice";
import wishlistSlice from "../Redux/slice/wishlistSlice";
import cartSlice from "./slice/cartSlice";
const cartStore = configureStore({
  reducer: {
    productReducer: productSlice,
    wishlistReducer: wishlistSlice,
    cartReducer: cartSlice,
  },
});
export default cartStore;
