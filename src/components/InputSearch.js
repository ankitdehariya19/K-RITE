
import React from "react";
import { BsSearch } from "react-icons/bs"; 

const Input = ({ type, placeholder, value, onChange, className }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <BsSearch className="text-gray-400" />
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`pl-10 px-4 py-2 border border-gray-300 rounded-xl shadow-md focus:outline-none  focus:ring-0 ${className}`}
      />
    </div>
  );
};

export default Input;
