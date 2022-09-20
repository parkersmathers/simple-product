import logo from "./logo.svg";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductChart from "./features/product/ProductChart";
import { fetchProduct } from "./features/product/productSlice";
import ProductDetails from "./features/product/ProductDetails";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.product.status);

  useEffect(() => {
    if (status === "loading") {
      dispatch(fetchProduct());
    }
  }, [dispatch, status]);

  return (
    <>
      <header className="navbar navbar-fixed navbar-bordered p-4">
        <img className="navbar-brand-logo" src={logo} alt="logo" />
      </header>
      <main className="main">
        <div className="content container-fluid px-4">
          <div className="row mb-5">
            <div className="col-lg-3">
              {status === "loading" ? (
                <div
                  className="card align-items-center"
                  style={{ height: "12rem" }}
                >
                  <span>loading....</span>
                </div>
              ) : (
                <ProductDetails />
              )}
            </div>
            <div className="col-lg-9">
              <div className="card">
                {status === "loading" ? (
                  <div
                    className="card align-items-center"
                    style={{ height: "12rem" }}
                  >
                    <span>loading....</span>
                  </div>
                ) : (
                  <ProductChart />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
