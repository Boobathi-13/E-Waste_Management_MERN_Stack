import React from "react";

const Dashboard = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 text-white p-6 rounded-md">
          <h2 className="text-xl font-semibold">E-Waste Contributions</h2>
          <p className="mt-2">Track your contributions towards recycling.</p>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded-md">
          <h2 className="text-xl font-semibold">Pending Requests</h2>
          <p className="mt-2">View and manage pending e-waste pickup requests.</p>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded-md">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <p className="mt-2">Stay updated with recent e-waste disposal activities.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;