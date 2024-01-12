"use client";
import PropTypes from "prop-types";

const StarIcon = ({star, fill, onChange}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0.00 0.00 43.00 42.00"
      className="h-10"
      onClick={() => onChange(star + 1) }
    >
      <path
        fill={fill}
        d="
  M 14.86 13.00
  L 20.56 1.37
  A 1.02 1.02 0.0 0 1 22.39 1.36
  L 28.32 13.17
  Q 28.53 13.60 29.01 13.67
  L 41.74 15.54
  A 1.22 1.22 0.0 0 1 42.41 17.63
  L 33.32 26.32
  A 1.36 1.34 -27.1 0 0 32.92 27.52
  L 35.07 40.29
  A 1.08 1.07 -80.8 0 1 33.51 41.42
  L 22.24 35.43
  A 1.49 1.49 0.0 0 0 20.86 35.43
  Q 15.13 38.42 9.51 41.34
  Q 9.27 41.47 8.99 41.49
  Q 8.47 41.52 8.08 41.00
  A 1.00 0.98 32.1 0 1 7.90 40.25
  L 10.03 28.02
  Q 10.23 26.90 9.41 26.11
  L 0.46 17.47
  A 1.11 1.10 -27.2 0 1 1.07 15.58
  L 13.96 13.66
  Q 14.58 13.57 14.86 13.00
  Z"
      />
    </svg>
  );
};

StarIcon.propTypes = {
  fill: PropTypes.string.isRequired,
};

export default StarIcon;
