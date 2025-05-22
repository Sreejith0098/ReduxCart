import React from "react";
import Header from "../components/Header";

const Cart = () => {
  return (
    <>
      <Header />
      <div className="mt-4">
        <h1 className="card-summery text-4xl text-blue-700 font-bold ps-3">Card Summary</h1>
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
                <tr  >
                  <td>1</td>
                  <td>Name</td>
                  <td>
                    <img style={{width:'80px'}} src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp" alt="" />
                  </td>
                  <td>
                    {" "}
                    <div className="flex">
                      <button className="font-bold">-</button>
                      <input value={0} className="border-2 w-10 text-center rounded" type="text" />
                      <button className="font-bold">+</button>
                    </div>{" "}
                  </td>
                  <td>1000</td>
                  <td>
                    <button>
                      <i class="fa-solid text-red-500 fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="float-right">
                <button className="bg-red-500 border font-bold rounded text-white p-2 me-2">Eampty cart</button>
                <button className="bg-blue-700 border font-bold rounded text-white p-2 ">Shop more</button>

            </div>
          </div>
          <div className="col-span-1 border rounded shadow p-3 ">
            <h1 className="font-bold text-2xl">
              Total Amount:{" "}
              <span className="text-red-700 font-bold">$ 1129.91</span>
            </h1>
            <hr />
            <button className="bg-green-700 border p-2 font-bold mt-2 text-white w-full rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
