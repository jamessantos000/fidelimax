import React from "react";
import PropTypes from "prop-types";

const Label = ({ htmlFor, additionalClass, children }) => {
  return (
    <label htmlFor={htmlFor} className={additionalClass}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.number.isRequired,
  additionalClass: PropTypes.string,
};

export default Label;
