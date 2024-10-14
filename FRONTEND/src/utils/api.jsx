import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);

// Ensure your environment variables are set up correctly
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Your new backend URL
console.log(API_BASE_URL);

// Axios instance for making API requests
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

// Function to update data
export const updateData = async (url, updatedData) => {
  try {
    const { data } = await axiosInstance.put(url, updatedData);
    return data;
  } catch (err) {
    console.error("Error updating data:", err.response || err.message);
    throw err;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: "http://localhost:3000", // Update with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});
