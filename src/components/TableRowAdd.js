import React, { useState } from "react";
import Input from "./Input";
import ImageUploadInput from "./ImageUploadInput";
import MembersCellInput from "./MembersCellInput";

const TableRowAdd = ({ onAddBrand }) => {
  const [formData, setFormData] = useState({
    name: "",
    imageURL: "",
    description: "",
    members: [],
    categories: "",
    tags: "",
    nextMeeting: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevData) => ({ ...prevData, imageURL: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleAddMember = (e) => {
    const { name, value } = e.target;
    const members = [...formData.members, { name: value, image: "" }];
    setFormData((prevData) => ({ ...prevData, members }));
  };

  const handleUploadPhoto = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedMembers = formData.members.map((member, i) =>
        i === index ? { ...member, image: reader.result } : member
      );
      setFormData((prevData) => ({ ...prevData, members: updatedMembers }));
    };
    reader.readAsDataURL(file);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddBrand(formData);
    setFormData({
      name: "",
      imageURL: "",
      description: "",
      members: [],
      categories: "",
      tags: "",
      nextMeeting: "",
    });
  };

  return (
    <tr className="">
      <td></td>
      <td>
        <div className="flex">
          <Input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Brand Name"
            onChange={handleChange}
          />
          <ImageUploadInput onChange={handleFileChange} />
        </div>
      </td>
      <td className="border">
        <Input
          type="text"
          name="description"
          value={formData.description}
          placeholder="Description"
          onChange={handleChange}
        />
      </td>
      <td className="border">
        <MembersCellInput
          onChange={(members) =>
            setFormData((prevData) => ({ ...prevData, members }))
          }
        />
      </td>

      <td className="border">
        <Input
          type="text"
          name="categories"
          value={formData.categories}
          placeholder="Categories"
          onChange={handleChange}
        />
      </td>
      <td className="border">
        <Input
          type="text"
          name="tags"
          value={formData.tags}
          placeholder="Tags"
          onChange={handleChange}
        />
      </td>
      <td className="border">
        <Input
          type="text"
          name="nextMeeting"
          value={formData.nextMeeting}
          placeholder="Next Meeting"
          onChange={handleChange}
        />
      </td>
      
    </tr>
  );
};

export default TableRowAdd;
