import React from "react";
import PropTypes from "prop-types";

const Flex = ({ children, additionalClass, additionalStyles, sm, md }) => {
  return <div style={additionalStyles} className={`flex ${additionalClass}`}>{children}</div>;
};

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  additionalClass: PropTypes.string,
  additionalStyles: PropTypes.any,
  sm: PropTypes.string,
  md: PropTypes.string,
};

export default Flex;
