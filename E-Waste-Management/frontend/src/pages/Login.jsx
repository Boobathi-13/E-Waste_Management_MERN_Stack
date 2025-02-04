// const Login = () => {
//     return (
//       <div className="container mx-auto py-10">
//         <h1 className="text-2xl font-bold mb-4">Login</h1>
//         <form>
//           <input type="email" placeholder="Email" className="block w-full mb-4" />
//           <input type="password" placeholder="Password" className="block w-full mb-4" />
//           <button className="bg-green-600 text-white px-4 py-2">Login</button>
//         </form>
//       </div>
//     );
//   };
  
//   export default Login;
  



import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation here
    if (email && password) {
      // Navigate to profile page on successful login
      navigate("/profile");
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="block w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Handle email change
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Handle password change
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

