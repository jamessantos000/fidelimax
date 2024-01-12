import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ text, placeholder, additionalStyles, additionalClass, onChange }) => {
  return (
    <textarea
      type="textfield"
      value={text}
      placeholder={placeholder}
      style={{
        border: "1px solid #ACB1BA",
        resize: "none",
        ...additionalStyles,
      }}
      className={additionalClass}
      onChange={onChange}
    />
  );
};

TextArea.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  additionalStyles: PropTypes.object,
  additionalClass: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextArea;
