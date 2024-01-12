import React from "react";
import PropTypes from "prop-types";

const Text = ({ children, fontSize, fontWeight, additionalStyles, additionalClass }) => {
  return <span style={{ fontSize, fontWeight, fontFamily: 'Poppins, sans-serif', ...additionalStyles }} className={additionalClass}>{children}</span>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  additionalStyles: PropTypes.string,
  additionalClass: PropTypes.string
};

export default Text;
