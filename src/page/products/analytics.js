import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const AnalyticsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Analytics Dashboard</h1>
       <div className='w-full h-fit p-4'>
       <Link to="/products/ProductsTable">
          <Button text="Go to Product Table" />
        </Link>
       </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Overall Performance</h2>
          <p>
            Analyze your overall performance metrics here. View key statistics and insights to track progress.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Sales Data</h2>
          <p>
            Dive into detailed sales data. Monitor revenue, transactions, and customer behavior for better decision-making.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">User Engagement</h2>
          <p>
            Track user engagement metrics. Understand user interactions, retention rates, and audience demographics.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Conversion Rates</h2>
          <p>
            Evaluate conversion rates and optimization strategies. Identify areas for improvement and maximize conversions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
