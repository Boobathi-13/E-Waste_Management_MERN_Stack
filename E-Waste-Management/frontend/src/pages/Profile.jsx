import React from "react";

const Profile = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <div className="bg-gray-800 text-white p-6 rounded-md">
        <h2 className="text-xl font-semibold">Personal Information</h2>
        <p className="mt-2">Name: John Doe</p>
        <p>Email: john@example.com</p>
        <p>Phone: +1234567890</p>
      </div>

      <div className="bg-gray-800 text-white p-6 rounded-md mt-6">
        <h2 className="text-xl font-semibold">E-Waste Contributions</h2>
        <p className="mt-2">Total Contributions: 5 items</p>
        <p>Pending Requests: 2</p>
      </div>
    </div>
  );
};

export default Profile;