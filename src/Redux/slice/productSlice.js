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

export const fetchSingleProducts = createAsyncThunk(
  "products/fetchSingleProducts",
  async (id) => {
    const result = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log(result.data);
    return result.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    loading: false,
    error: "",
    singleProduct:[],
    viewLoading:false,
    viewError:''

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


    builder.addCase(fetchSingleProducts.fulfilled, (state, apiResult) => {
        state.singleProduct = apiResult.payload;
        state.viewLoading = false;
        state.viewError = "";
      });
      builder.addCase(fetchSingleProducts.pending, (state, apiResult) => {
        state.singleProduct = [];
        state.viewLoading = true;
        state.viewError = "";
      });
      builder.addCase(fetchSingleProducts.rejected, (state, apiResult) => {
        state.singleProduct = [];
        state.viewLoading = true;
        state.viewError = "api result failed";
      });



  },
});
export default productSlice.reducer;
