import React from "react";
import PropTypes from "prop-types";

const Header = ({ children, bgColor }) => {
  return <header className="text-white h-80 px-4 md:px-8 py-4" style={{ backgroundColor: bgColor }}>{children}</header>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string.isRequired
};

export default Header;
