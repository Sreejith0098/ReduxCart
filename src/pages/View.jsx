import React from "react";
import Header from "../components/Header";

const View = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 m-3">
        <div className="border rounded p-2 shadow text-center">
          <img
            style={{ height: "600px" }}
            src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
            alt=""
          />
          <div className="flex justify-between">
            <button className="border rounded bg-red-600 text-white p-3">
              Add to whishlist
            </button>
            <button className="border rounded bg-green-600 text-white  p-3 ">
              Add to cart
            </button>
          </div>
        </div>
        <div>
          <h3 className="font-bold">PID :3</h3>
          <h1 className="font-bold text-5xl"></h1>
          <h5 className="text-red-600 text-2xl font-bold">$ 9.99</h5>
          <h6>
            <span className="font-bold">Brand:</span>brand name
          </h6>
          <h6>
            <span className="font-bold">Category:</span>category name
          </h6>
          <p className="text-2xl">
            <span className="font-bold">Description</span>Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iusto ducimus quibusdam molestiae
            natus libero tempore ex rerum dolorem suscipit cum beatae tempora
            illo amet deserunt, optio, necessitatibus ullam. Atque, dolore!
          </p>
          <h4 className="mt-5 font-bold">Client Reviews</h4>
          <div className="border rounded p-2 shadow">
            <h5>
              <span className="font-bold">Name:</span>Review
            </h5>
            <h6>
              <span className="font-bold">Review:</span>5
              <i className="fa-solid fa-star text-yellow-500"></i>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
