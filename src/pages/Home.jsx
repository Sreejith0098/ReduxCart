import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../Redux/slice/productSlice";
import { useDispatch } from "react-redux";
const Home = () => {

  return (
    <>
      <Header insideHome={true} />
      <div className="grid grid-cols-4 gap-3 mt-5 p-2">
        <div className="border rounded p-2 shadow text-center">
          <img
            width={"100%"}
            src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
            alt=""
          />
          <h3 className="font-bold text-2xl mb-3">product name</h3>
          <Link to={"/id/view"} className="bg-black text-white p-1 rounded border ">
            View More
          </Link>
        </div>
      </div>
      </>
  );
};

export default Home;
