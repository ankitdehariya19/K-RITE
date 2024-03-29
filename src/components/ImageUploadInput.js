import React, { useRef } from 'react';
import { FiUpload } from 'react-icons/fi'; 

const ImageUploadInput = ({ onChange }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    onChange(file);
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleInputChange}
        style={{ display: 'none' }}
      />
      <button
        type="button"
        onClick={handleFileChange}
        className="flex items-center justify-center px-1 py-1  text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <FiUpload className="" />
      </button>
    </>
  );
};

export default ImageUploadInput;
