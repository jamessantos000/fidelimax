import React from "react";
import PropTypes from "prop-types";

const Select = ({
  value,
  ask,
  onChange,
  options,
  additionalClass,
  additionalStyles,
}) => {

  const sanitizedValue = value === null ? "" : value;

  return (
    <select
      value={sanitizedValue}
      onChange={onChange}
      className={additionalClass}
      style={additionalStyles}
    >
      <option key="demo" value="" hidden>
        {ask}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.description}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  ask: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  additionalClass: PropTypes.string,
  additionalStyles: PropTypes.object,
};

export default Select;
