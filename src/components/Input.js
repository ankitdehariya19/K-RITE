import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const Input = ({ type, name, placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddText = () => {
    console.log('Text added:', value);
    setValue(''); 
  };

  return (
    <div className="flex items-center mx-2 rounded-md  focus-within:ring-0">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="w-full border-none outline-none bg-transparent text-sm placeholder-gray-400 focus:ring-0"
      />
      <button
        type="button"
        onClick={handleAddText}
        className="flex items-center justify-center  ml-2 rounded-full  text-gray-400  focus:outline-none"
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default Input;
