import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";

import {
  addCart,
  decrementCartItem,
  emptyCart,
  removeCartItem,
} from "../Redux/slice/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const [totalAmmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (cartItems.length > 0) {
      setTotalAmount(
        cartItems
          .map((eachItem) => eachItem.totalPrice)
          ?.reduce((a, b) => a + b)
      );
    }
  }, [cartItems]);

  const Decrement = (product) => {
    if (product.quantity > 1) {
      dispatch(decrementCartItem(product.id));
    } else {
      dispatch(removeCartItem(product.id));
    }
  };
  const handleCheckout = () => {
    alert("thankyou for shopping with us");
    dispatch(emptyCart);
    navigate("/");
  };
  return (
    <>
      <Header />
      <div className="mt-4">
        <h1 className="card-summery text-5xl mt-6 text-center text-blue-700 font-bold ps-3">
          Items not found in the Cart
        </h1>

        {cartItems?.length > 0 ? (
          <div className="grid grid-cols-3 gap-3 mt-3  m-3">
            <div className="col-span-2 border shadow p-3   ">
              <table className="table-auto w-full ">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((eachItem, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{eachItem.title}</td>
                      <td>
                        <img
                          style={{ width: "80px" }}
                          src={eachItem.thumbnail}
                          alt=""
                        />
                      </td>
                      <td>
                        {" "}
                        <div className="flex">
                          <button
                            onClick={() => Decrement(eachItem)}
                            className="font-bold"
                          >
                            -
                          </button>
                          <input
                            value={eachItem.quantity}
                            className="border-2 w-10 text-center rounded"
                            type="text"
                          />
                          <button
                            onClick={() => dispatch(addCart(eachItem))}
                            className="font-bold"
                          >
                            +
                          </button>
                        </div>{" "}
                      </td>
                      <td>{eachItem.totalPrice}</td>
                      <td>
                        <button>
                          <i className="fa-solid text-red-500 fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="float-right">
                <button
                  onClick={()=>dispatch(emptyCart())}
                  className="bg-red-500 border font-bold rounded text-white p-2 me-2"
                >
                  Empty cart
                </button>
                <Link
                  to={"/"}
                  className="bg-blue-700 border font-bold rounded text-white p-2 "
                >
                  Shop more
                </Link>
              </div>
            </div>
            <div className="col-span-1 border rounded shadow p-3 ">
              <h1 className="font-bold text-2xl">
                Total Amount:{" "}
                <span className="text-red-700 font-bold">{totalAmmount}</span>
              </h1>
              <hr />
              <button
                onClick={handleCheckout}
                className="bg-green-700 border p-2 font-bold mt-2 text-white w-full rounded"
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div style={{ marginLeft: "430px" }} className="">
            <img
              className="w-xl"
              src="https://assets-v2.lottiefiles.com/a/76623d28-4e37-11ef-87f5-03e9496a5cb5/PR2PeUMHrd.gif"
              alt=""
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
