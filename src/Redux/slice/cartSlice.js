import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCart: (state, argumentFromComponent) => {
      const existingProduct = state.cartItems.find(
        (eachItem) => eachItem.id == argumentFromComponent.payload.id
      );
      if (existingProduct) {
        //logic for existing item
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.quantity * existingProduct.price;
        const remainingProduct = state.cartItems.filter(
          (eachItem) => eachItem.id != existingProduct.id
        );
        state.cartItems = [...remainingProduct, existingProduct];
      } else {
        state.cartItems.push({
          ...argumentFromComponent.payload,
          quantity: 1,
          totalPrice: argumentFromComponent.payload.price,
        });
      }
    },
  },
});export const {addCart} = cartSlice.actions
export default cartSlice.reducer;
