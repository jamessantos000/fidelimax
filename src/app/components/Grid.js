import React from "react";
import PropTypes from "prop-types";

const Grid = ({ children, additionalClass, additionalStyles, onChange }) => {
  return <div style={additionalStyles} className={`grid ${additionalClass}`} onClick={onChange}>{children}</div>;
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  additionalClass: PropTypes.string,
  additionalStyles: PropTypes.object,
  onChange: PropTypes.func,
};

export default Grid;
