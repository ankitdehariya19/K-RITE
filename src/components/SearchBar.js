import React from 'react';

const SearchBar = ({ value, onChange, placeholder, icon }) => {
  return (
    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-md">
      {icon}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="outline-none bg-transparent ml-1"
      />
    </div>
  );
};

export default SearchBar;
