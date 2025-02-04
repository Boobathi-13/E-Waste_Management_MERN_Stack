// import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000/api" });

// export const login = (data) => API.post("/auth/login", data);
// export const register = (data) => API.post("/auth/register", data);

// export default API;


import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data; // This will return the token
  } catch (error) {
    throw new Error('Error logging in');
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error registering user');
  }
};

export const getTrackingData = async () => {
  try {
    const response = await api.get('/tracking/123'); // Example tracking ID
    return response.data;
  } catch (error) {
    console.error('Error fetching tracking data', error);
  }
};

// Function to add new e-waste
export const addEwaste = async (ewasteData) => {
  try {
    const response = await api.post('/ewaste', ewasteData);
    return response.data; // Return the response from the backend
  } catch (error) {
    console.error('Error adding e-waste', error);
    throw error; // Rethrow the error so it can be handled in the frontend
  }
};