import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Redux/slice/productSlice"
const cartStore = configureStore({
  reducer:{
    productReducer:productSlice
  }
})
export default cartStore
