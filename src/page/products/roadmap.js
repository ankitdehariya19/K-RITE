import React from 'react';

const Roadmap = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Roadmap</h1>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Product Roadmap</h2>
        <p className="text-gray-800">
          Our product roadmap outlines the upcoming features, improvements, and milestones for our
          platform. Check back regularly for updates and progress.
        </p>
        <ul className="list-disc text-gray-800 mt-4 pl-6">
          <li>Feature A - Q1 2024</li>
          <li>Improvement B - Q2 2024</li>
          <li>Milestone C - Q3 2024</li>
          <li>Feature D - Q4 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default Roadmap;
