import React from "react";
import { useSelector } from "react-redux";
import List from "../../components/List";

const ProductDetails = () => {
  const title = useSelector((state) => state.product.title);
  const subtitle = useSelector((state) => state.product.subtitle);
  const tags = useSelector((state) => state.product.tags);
  const image = useSelector((state) => state.product.image);

  return (
    <div className="card text-center h-100 mb-3 mb-lg-5">
      <div className="card-body">
        <div className="mx-auto" style={{ width: "13rem", height: "auto" }}>
          <img className="img-fluid" src={image} />
        </div>
        <h5 className="card-title">{title}</h5>
        <small className="card-subtitle text-black-50">{subtitle}</small>
        <hr className="my-4" />
        <List items={tags} />
      </div>
    </div>
  );
};

export default ProductDetails;
