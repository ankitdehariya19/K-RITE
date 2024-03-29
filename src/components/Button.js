
import React from "react";

const Button = ({ onClick, text, icon, secondaryIcon, className }) => {
  return (
    <button
      className={`flex items-center justify-center px-4 py-2 bg-white shadow-md font-medium text-gray-800 rounded-xl hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
      {secondaryIcon && <span className="ml-2">{secondaryIcon}</span>}
    </button>
  );
};

export default Button;
