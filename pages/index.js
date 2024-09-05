import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';

const Home = () => {
  return (
    <div className="dashboard-layout">
      <Header />
      <div className="dashboard-container">
        <Sidebar />
        <main className="dashboard-main">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default Home;
