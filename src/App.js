import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './page/HomePage';
import ProductsTable from './page/products/ProductsTable';
import Roadmap from './page/products/roadmap';
import Feedback from './page/products/feedback';
import Performance from './page/products/performance';
import Team from './page/products/team';
import Analytics from './page/products/analytics';
import HelpAndSteps from './page/products/HelpAndSteps';
import brandsData from "./brandsData";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex w-full  min-h-screen flex-col ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/ProductsTable" element={<ProductsTable brands={brandsData}  />} />
            <Route path="/products/roadmap" element={<Roadmap />} />
            <Route path="/products/feedback" element={<Feedback />} />
            <Route path="/products/performance" element={<Performance />} />
            <Route path="/products/team" element={<Team />} />
            <Route path="/products/analytics" element={<Analytics />} />
            <Route path="/help-and-steps" element={<HelpAndSteps />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
