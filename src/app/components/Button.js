import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, additionalClass, additionalStyles, onClick }) => {
  return (
    <button
      className={additionalClass}
      style={additionalStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  additionalClass: PropTypes.string,
  additionalStyles: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;
