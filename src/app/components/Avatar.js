import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ children }) => {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold" style={{ backgroundColor: '#333E4F'}}>
      {children}
    </div>
  );
};

Avatar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Avatar;
