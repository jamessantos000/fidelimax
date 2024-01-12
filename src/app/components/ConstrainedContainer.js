import React from "react";
import PropTypes from "prop-types";

const ConstrainedContainer = ({ children }) => {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#F2F4F8" }}>
      <div className="w-full">{children}</div>
    </div>
  );
};

ConstrainedContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConstrainedContainer;
