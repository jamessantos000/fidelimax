import React from "react";
import PropTypes from "prop-types";

const Text = ({ children, color, fontSize, fontWeight, additionalStyles, additionalClass }) => {
  return <span style={{ color, fontSize, fontWeight, ...additionalStyles }} className={additionalClass}>{children}</span>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  additionalStyles: PropTypes.string,
  additionalClass: PropTypes.string
};

export default Text;
