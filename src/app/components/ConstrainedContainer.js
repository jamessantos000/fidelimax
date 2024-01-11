import React from "react";
import PropTypes from "prop-types";

const ConstrainedContainer = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="w-full">{children}</div>
    </div>
  );
};

ConstrainedContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConstrainedContainer;
