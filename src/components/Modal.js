import React from 'react';
import Button from './Button';
import Input from './Input';

const Modal = ({ isOpen, onClose, formData, handleChange, handleFileChange, handleFormSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Update Brand</h2>
        <Input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Brand Name"
          onChange={handleChange}
        />
        <Button text="Update" onClick={handleFormSubmit} />
        <Button text="Cancel" onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
