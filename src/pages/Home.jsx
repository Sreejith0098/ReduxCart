import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../Redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  const { allProducts, error, loading } = useSelector(
    (state) => state.productReducer
  );

  return (
    <>
      <Header  insideHome={true} />
      {loading ? (
        <div>
          {" "}
          <img
            style={{ marginLeft: "500px" }}
            src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif"
            alt=""
          />
        </div>
      ) : (
        <div>
            {
                allProducts?.length>0? <div className="grid grid-cols-4 gap-3 mt-5 p-2">
                {allProducts?.map((eachProduct) => (
                  <div className="border rounded p-2 shadow text-center">
                    <img width={"100%"} src={eachProduct.thumbnail} alt="" />
                    <h3 className="font-bold text-2xl mb-3">{eachProduct.title}</h3>
                    <Link
                      to={`/${eachProduct.id}/view`}
                      className="bg-black text-white p-1 rounded border "
                    >
                      View More
                    </Link>
                  </div>
                ))}
              </div> : <div>no products found</div>
            }
       
        </div>
       
      )}
    </>
  );
};

export default Home;
