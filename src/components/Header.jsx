import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchProduct } from "../Redux/slice/productSlice";

const Header = ({ insideHome }) => {
const dispatch = useDispatch()

const {wishlistItems} = useSelector((state)=>state.wishlistReducer)

const {cartItems} = useSelector((state)=>state.cartReducer)

  return (
    <nav className="bg-purple-600 flex sticky top-0 w-full p-5">
      <Link className="text-white text-2xl font-bold" to={"/"}>
        <i className="fa-solid fa-bag-shopping text-yellow-500"></i> DailyCart
      </Link>{" "}
      <ul className="text-right flex-1 ">
        {insideHome ? (
          <li className="inline-block mx-5">
            <input
            onChange={(e)=>dispatch(searchProduct(e.target.value))}
              className="bg-white border w-84 rounded text-center p-1 "
              type="'text'"
              placeholder="search products here"
            />{" "}
          </li>
        ) : (
          ""
        )}
        <li className="inline-block mx">
          <Link className="text-white text-2xl font-bold " to={"/wishlist"}>
            <i className="fa-solid fa-heart text-red-600"></i> wishlist{" "}
            <span className=" p-1 rounded-4xl">{wishlistItems?wishlistItems?.length:0}</span>
          </Link>
        </li>
        <li className="inline-block mx">
          <Link to={"/cart"} className="text-white text-2xl font-bold ">
            <i className="fa-solid fa-cart-shopping text-orange-600"></i> Cart{" "}
            <span className=" p-1 rounded-4xl">{cartItems?.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
