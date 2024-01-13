import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { BiSolidError } from "react-icons/bi";

const Alert = ({ type, message, closeAlert }) => {
  const [isVisible, setIsVisible] = useState(true);

  const hideTimeout = 4000;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
      closeAlert()
    }, hideTimeout);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`w-full ${
            type === "error" ? "bg-red-500" : "bg-green-100"
          } border-l-4 border-green-500 text-green-700 p-4 mt-4`}
        >
          <div className="flex items-center">
            <div className="mr-3">
              {type === "error" ? (
                <BiSolidError className="h-6 w-6" color="#FFF" />
              ) : (
                <HiOutlineCheckCircle className="h-6 w-6" />
              )}
            </div>
            <div>
              <p
                className={`text-sm font-semibold ${
                  type === "error" ? "text-white" : "text-black"
                }`}
              >
                {type === "error"
                  ? "Oops, tivemos um problema!"
                  : "Operação bem-sucedida!"}
              </p>
              <p
                className={`text-sm ${
                  type === "error" ? "text-white" : "text-black"
                }`}
              >
                {message}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  closeAlert: PropTypes.func
};

export default Alert;
