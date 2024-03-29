import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to Dashboard</h1>
        <Link to="/products/ProductsTable">
          <Button text="Go to Product Table" />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
