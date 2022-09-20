import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  return <p className="text-danger">{message}</p>;
};

ErrorMessage.propTypes = { message: PropTypes.string };

export default ErrorMessage;
