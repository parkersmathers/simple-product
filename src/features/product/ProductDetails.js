import React from "react";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const title = useSelector((state) => state.product.title);
  const subtitle = useSelector((state) => state.product.subtitle);
  const tags = useSelector((state) => state.product.tags);
  const image = useSelector((state) => state.product.image);

  return (
    <div className="card text-center h-100 mb-3 mb-lg-5">
      <div className="card-body">
        <img
          className=""
          style={{ width: "13rem", height: "auto" }}
          src={image}
        />
        <h5 className="card-title">{title}</h5>
        <small className="card-subtitle text-black-50">{subtitle}</small>
        <hr className="my-4" />
        <ul className="list-group list-group-horizontal flex-wrap">
          {tags &&
            tags.length &&
            tags.map((tag) => (
              <li
                key={tag}
                className="px-3 mx-1 rounded mb-2 list-group-item border"
              >
                {tag}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
