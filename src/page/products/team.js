import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Designer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageURL: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      role: 'Developer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageURL: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white shadow-md p-6 rounded-lg">
            <img
              src={member.imageURL}
              alt={member.name}
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-semibold mb-2">{member.name}</h2>
            <p className="text-sm text-gray-700 mb-2">{member.role}</p>
            <p className="text-sm text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
