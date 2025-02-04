// const Register = () => {
//     return (
//       <div className="container mx-auto py-10">
//         <h1 className="text-2xl font-bold mb-4">Register</h1>
//         <form>
//           <input type="text" placeholder="Name" className="block w-full mb-4" />
//           <input type="email" placeholder="Email" className="block w-full mb-4" />
//           <input type="password" placeholder="Password" className="block w-full mb-4" />
//           <button className="bg-green-600 text-white px-4 py-2">Register</button>
//         </form>
//       </div>
//     );
//   };
  
//   export default Register;
  

import React, { useState } from "react";
import { registerUser } from "../services/api"; // Import the register function

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser({ name, email, password });
      if (data) {
        alert("Registration successful. Please log in.");
      }
    } catch (error) {
      setErrorMessage("Error registering, please try again.");
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          className="block w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="block w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-green-600 text-white px-4 py-2" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

