import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import ProductChart from "./ProductChart";
import ProductDetails from "./ProductDetails";
import { fetchProduct } from "./productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    if (status === "loading") {
      // this is hard-coded, we would get the id for get request
      // from react-router params, for example
      dispatch(fetchProduct("B007TIE0GQ"));
    }
  }, [dispatch, status]);

  let content;
  if (status === "loading") {
    // show loading state when data is being fetched
    content = <Loading />;
  } else if (status === "failed") {
    // show message if request returned an error
    content = <ErrorMessage message={error} />;
  } else if (status === "succeeded") {
    // render product view when data is successfully fetched
    content = (
      <>
        <div className="col-lg-3 mb-3 mb-lg-0">
          <ProductDetails />
        </div>
        <div className="col-lg-9">
          <div className="card">
            <ProductChart />
          </div>
        </div>
      </>
    );
  }

  return <div className="row mb-5">{content}</div>;
};

export default Product;
