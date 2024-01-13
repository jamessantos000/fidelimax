import React from "react";
import PropTypes from "prop-types";

const Radio = ({ name, value, id, checked, onChange }) => {
  return (
    <input type="radio" id={id} name={name} checked={checked} value={value} onChange={onChange} />
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Radio;
