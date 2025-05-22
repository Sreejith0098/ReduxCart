import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts',async()=>{
  const result =  await axios.get('https://dummyjson.com/products')
  return result
})
const productSlice = createSlice({
    name:'products',
    initialState:{
        allProducts:[]
    },
    reducers:{
        //synchronous functions
    }
})