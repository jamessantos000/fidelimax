import React from "react";
import PropTypes from "prop-types";

const Div = ({ children, additionalClass, additionalStyles }) => {
  return (
    <div style={additionalStyles} className={additionalClass}>
      {children}
    </div>
  );
};

Div.propTypes = {
  children: PropTypes.node.isRequired,
  additionalClass: PropTypes.string,
  additionalStyles: PropTypes.string,
};

export default Div;
