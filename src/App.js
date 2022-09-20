import React from "react";
import Header from "./components/Header";
import Product from "./features/product/Product";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="content container-fluid px-4">
          <Product />
        </div>
      </main>
    </>
  );
};

export default App;
