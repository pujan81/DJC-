import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);

export const makePaymentRequest = axios.create({
  baseURL: "http://localhost:3000", // Update with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});
