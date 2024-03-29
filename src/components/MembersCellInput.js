import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi'; 
import axios from 'axios';

const MembersCellInput = ({ onChange }) => {
  const [members, setMembers] = useState([]);

  const fetchRandomMember = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      const { name, email, picture } = response.data.results[0];
      const image = picture.medium; 
      const newMember = { name: `${name.first} ${name.last}`, email, image };
      setMembers((prevMembers) => [...prevMembers, newMember]);
      onChange([...members, newMember]);
    } catch (error) {
      console.error('Error fetching random member:', error);
    }
  };

  const handleAddMember = async (e) => {
    e.preventDefault();
    await fetchRandomMember();
  };

  return (
    <div>
      <form onSubmit={handleAddMember}>
        <div className="flex items-center  space-x-2 ">
          <button
            type="submit"
            className="flex items-center justify-center  ml-2 px-2 gap-x-2 rounded-full  text-gray-400  focus:outline-none"
          >  Add Members 
            <FiPlus />
          </button>
        </div>
      </form>
      {members.map((member, index) => (
        <div key={index} className="flex items-center space-x-2">
          <img src={member.image} alt={member.name} className="h-8 w-8 rounded-full" />
          <span>{member.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MembersCellInput;
