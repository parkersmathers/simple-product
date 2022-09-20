import React from "react";
import PropTypes from "prop-types";

const Loading = ({ isLoading }) => {
  return isLoading ? (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "12rem" }}
    >
      <div
        className="spinner-border spinner-border-lg text-light"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : null;
};

Loading.propTypes = { isLoading: PropTypes.bool };

export default Loading;
