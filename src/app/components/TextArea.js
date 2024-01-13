import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ value, placeholder, additionalStyles, additionalClass, onChange }) => {
  return (
    <textarea
      type="textfield"
      value={value}
      placeholder={placeholder}
      style={{
        border: "1px solid #ACB1BA",
        resize: "none",
        ...additionalStyles,
      }}
      className={additionalClass}
      onChange={onChange}
    >
      {value}
    </textarea>
  );
};

TextArea.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  additionalStyles: PropTypes.object,
  additionalClass: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextArea;
