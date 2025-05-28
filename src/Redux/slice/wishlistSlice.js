import { createSlice } from "@reduxjs/toolkit"


const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        wishlistItems:[]
    },
   reducers:{
    addtoWishList:(state,argumentFromComponent)=>{
        state.wishlistItems.push(argumentFromComponent.payload)
    },
    removeFromWishlist:(state,idFromComponent)=>{
        state.wishlistItems = state.wishlistItems.filter((eachItem)=>eachItem.id!=idFromComponent.payload)
    }
   }
})

export const {addtoWishList,removeFromWishlist} =wishlistSlice.actions
export default wishlistSlice.reducer