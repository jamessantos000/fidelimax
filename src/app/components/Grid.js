import React from "react";
import PropTypes from "prop-types";

const Grid = ({ children, additionalClass, additionalStyles }) => {
  return <div style={additionalStyles} className={`grid ${additionalClass}`}>{children}</div>;
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  additionalClass: PropTypes.string,
  additionalStyles: PropTypes.any
};

export default Grid;
