import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const result = await axios.get("https://dummyjson.com/products");
    console.log(result.data.products);
    return result.data.products;
  }
);
const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    loading: false,
    error: "",
  },
  reducers: {
    //synchronous functions
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, apiResult) => {
      state.allProducts = apiResult.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchAllProducts.pending, (state, apiResult) => {
      state.allProducts = [];
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchAllProducts.rejected, (state, apiResult) => {
      state.allProducts = [];
      state.loading = true;
      state.error = "api result failed";
    });
  },
});
export default productSlice.reducer;
