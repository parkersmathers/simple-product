import React from "react";

const Loading = () => {
  return (
    <div
      className="card align-items-center justify-content-center"
      style={{ height: "12rem" }}
    >
      <div
        className="spinner-border spinner-border-lg text-secondary"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
