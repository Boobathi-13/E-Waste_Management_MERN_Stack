import React, { useState, useEffect } from "react";

const Tracking = () => {
  const [trackingData, setTrackingData] = useState({
    status: "Pending",
    estimatedPickupDate: "2024-12-10",
    location: "123 Main St, City",
  });

  // Simulate fetching tracking data
  useEffect(() => {
    // Here you can fetch data from the backend API
    setTrackingData({
      status: "Picked Up",
      estimatedPickupDate: "2024-12-01",
      location: "123 Main St, City",
    });
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Tracking Your E-Waste</h1>
      <div className="bg-gray-800 text-white p-6 rounded-md">
        <h2 className="text-xl font-semibold">Status: {trackingData.status}</h2>
        <p className="mt-2">Estimated Pickup Date: {trackingData.estimatedPickupDate}</p>
        <p className="mt-2">Location: {trackingData.location}</p>
      </div>
    </div>
  );
};

export default Tracking;
