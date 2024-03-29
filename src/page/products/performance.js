import React from 'react';

const PerformancePage = () => {
  const performanceMetrics = [
    { id: 1, metric: 'Revenue', value: '$10,000' },
    { id: 2, metric: 'Users', value: '500' },
    { id: 3, metric: 'Sessions', value: '1,000' },
    { id: 4, metric: 'Conversion Rate', value: '5%' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Performance Metrics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {performanceMetrics.map((item) => (
          <div key={item.id} className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{item.metric}</h2>
            <p className="text-2xl text-gray-800 font-bold mb-4">{item.value}</p>
            <p className="text-sm text-gray-600">Last updated: March 25, 2024</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformancePage;
