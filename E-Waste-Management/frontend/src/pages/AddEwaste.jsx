// // AddEwaste.jsx

// const AddEwaste = () => {
//     return (
//       <div className="container mx-auto py-10">
//         <h1 className="text-2xl font-bold mb-4">Add E-Waste</h1>
//         <form>
//           <input type="text" placeholder="E-Waste Name" className="block w-full mb-4" />
//           <textarea placeholder="E-Waste Details" className="block w-full mb-4"></textarea>
//           <button className="bg-green-600 text-white px-4 py-2">Add E-Waste</button>
//         </form>
//       </div>
//     );
//   };
  
//   // Export the component as default
//   export default AddEwaste;
  
import React, { useState } from "react";
import { addEwaste } from "../services/api"; // Import addEwaste API

const AddEwaste = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddEwaste = async (e) => {
    e.preventDefault();
    const ewasteData = { name, details };
    try {
      const response = await addEwaste(ewasteData); // Send data to backend
      if (response && response.message === "E-Waste added successfully") {
        alert("E-waste added successfully!");
        setName("");
        setDetails("");
      }
    } catch (error) {
      setErrorMessage("Error adding e-waste, please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Add E-Waste</h1>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <form onSubmit={handleAddEwaste}>
        <input
          type="text"
          placeholder="E-Waste Name"
          className="block w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="E-Waste Details"
          className="block w-full mb-4"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <button className="bg-green-600 text-white px-4 py-2" type="submit">
          Add E-Waste
        </button>
      </form>
    </div>
  );
};

export default AddEwaste;
