import logo from "./logo.svg";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProduct } from "./api/client";
import ProductChart from "./features/product/ProductChart";
import { productFetched } from "./features/product/productSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProduct()
      .then((data) => {
        console.log(data);
        dispatch(productFetched(data));
      })
      .catch((error) => {
        console.error("error :>> ", error);
      });
  }, []);

  return (
    <>
      <header className="navbar navbar-fixed navbar-bordered py-4">
        <img className="navbar-brand-logo" src={logo} alt="logo" />
      </header>
      <main className="main">
        <div className="content container-fluid" style={{ marginTop: "6rem" }}>
          <div className="row mb-5">
            <div className="col-lg-3">
              <div className="card h-100 mb-3 mb-lg-5">
                <div className="card-body"></div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="card">
                <ProductChart />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
