import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addtoWishList, removeFromWishlist } from "../Redux/slice/wishlistSlice";
import { addCart } from "../Redux/slice/cartSlice";

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch()

  const addItemToCart= (product)=>{
    dispatch(addCart(product));
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <>
      <Header />
      {wishlistItems?.length > 0 ? (
        <div className="mt-4 ">
          <h1 className="font-bold text-red-700 text-4xl ps-4  ">My wishlist</h1>
          <div className="grid grid-cols-4 gap-3">
            {wishlistItems?.map((eachItem) => (
              <div className="border rounded m-4 p-1 shadow-2xl text-center">
                <img width={"100%"} src={eachItem.thumbnail} alt="" />
                <h3 className="font-bold text-2xl mb-3">{eachItem?.title}</h3>
                <div className="flex justify-around">
                  <button onClick={()=>dispatch(removeFromWishlist(eachItem?.id))}>
                    {" "}
                    <i className="fa-solid font-bold text-2xl text-red-600 fa-heart-circle-minus"></i>
                  </button>
                  <button
                  onClick={()=>addItemToCart(eachItem)}
                  >
                    {" "}
                    <i className="fa-solid font-bold text-2xl text-green-700 fa-cart-arrow-down"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{marginLeft:'430px'}} className="">
            <h1 className=" ms-18 text-blue-700 font-bold mt-11 text-5xl"> No items found in wishlist</h1>
            <img className="w-xl" src="https://assets-v2.lottiefiles.com/a/76623d28-4e37-11ef-87f5-03e9496a5cb5/PR2PeUMHrd.gif" alt="" />
        </div>
      )}
    </>
  );
};

export default Wishlist;
