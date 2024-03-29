import React from 'react';

const HelpAndSteps = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Help and Steps</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Help Section</h2>
          <p className="text-gray-800">
            This is the help section where users can find information and resources to resolve
            issues or get assistance.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Steps Section</h2>
          <ol className="list-decimal text-gray-800 pl-6">
            <li>Step 1: Register for an account</li>
            <li>Step 2: Log in to your account</li>
            <li>Step 3: Explore dashboard features</li>
            <li>Step 4: Contact support if needed</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSteps;
