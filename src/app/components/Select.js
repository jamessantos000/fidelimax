import React from "react";
import PropTypes from "prop-types";

const Select = ({
  value,
  onChange,
  options,
  additionalClass,
  additionalStyles,
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={additionalClass}
      style={additionalStyles}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  additionalClass: PropTypes.string,
  additionalStyles: PropTypes.object,
};

export default Select;
