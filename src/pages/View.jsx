import React, { useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProducts } from "../Redux/slice/productSlice";
import { addtoWishList } from "../Redux/slice/wishlistSlice";
import { addCart } from "../Redux/slice/cartSlice";

const View = () => {
  const { id } = useParams();
  // const[product, setproduct] =useState({})
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProducts(id));
  }, []);


  const { singleProduct, viewLoading, viewError } = useSelector(
    (state) => state.productReducer
  );
  const {wishlistItems} =useSelector((state)=>state.wishlistReducer)
  const addWishList = () => {
    let existingProduct =wishlistItems.find((eachItem)=>eachItem.id==singleProduct.id)
    console.log(existingProduct)
    if(existingProduct){
        alert("product already exists in your wishlist")
    }else{
        dispatch(addtoWishList(singleProduct));
        alert("succesfully added to wishlist");
        console.log(wishlistItems)
    }
   
  };

  return (
    <>
      <Header />
      
      {viewLoading ? (
        <div>
          {" "}
          <img
            style={{ marginLeft: "500px" }}
            src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 m-3">
          <div className="border rounded p-2 shadow text-center">
            <img
              style={{ height: "600px" }}
              src={singleProduct?.thumbnail}
              alt=""
            />
            <div className="flex justify-between">
              <button
                onClick={addWishList}
                className="border rounded bg-red-600 text-white p-3"
              >
                Add to whishlist
              </button>
              <button
              onClick={()=>dispatch(addCart(singleProduct))}
              className="border rounded bg-green-600 text-white  p-3 ">
                Add to cart
              </button>
            </div>
          </div>
          <div className="ps-5 pt-6">
            <h3 className="font-bold text-xl">
              PID :${fetchSingleProducts.id}
            </h3>
            <h1 className="font-bold text-5xl"></h1>
            <h5 className="text-red-600 text-2xl  font-bold">
              {fetchSingleProducts}
            </h5>
            <h6>
              <span className="font-bold text-xl">Brand:</span>
              {singleProduct.brand}
            </h6>
            <h6>
              <span className="font-bold text-xl">Category:</span>
              {singleProduct.category}
            </h6>
            <p className="text-3xl">
              <span className="font-bold">Description:</span>
              {singleProduct.description}
            </p>
            <h4 className="mt-5 font-bold text-3xl">Client Reviews</h4>
            {singleProduct?.reviews?.map((eachReview) => (
              <div className="border text-xl  mt-3 rounded p-2 shadow">
                <h5>
                  <span className="font-bold text-xl">
                    {eachReview?.reviewerName}
                  </span>
                  {eachReview?.comment}
                </h5>
                <h6>
                  <span className="font-bold text-xl">Rating:</span>
                  {eachReview?.rating}
                  <i className="fa-solid fa-star text-yellow-500"></i>
                </h6>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default View;
