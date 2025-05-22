import React from "react";
import Header from "../components/Header";

const Wishlist = () => {
  return (
    <>
      <Header />
      <div className="mt-4 ">
        <h1 className="font-bold text-red-700 text-4xl ps-4 ">My wishlist</h1>
        <div className="grid grid-cols-4 gap-3">
          <div className="border rounded m-4 p-1 shadow-2xl text-center">
            <img
              width={"100%"}
              src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
              alt=""
            />
            <h3 className="font-bold text-2xl mb-3">product name</h3>
            <div className="flex justify-around">
              <button>
                {" "}
                <i class="fa-solid font-bold text-2xl text-red-600 fa-heart-circle-minus"></i>
              </button>
              <button>
                {" "}
                <i class="fa-solid font-bold text-2xl text-green-700 fa-cart-arrow-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
