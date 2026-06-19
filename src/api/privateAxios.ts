import axios from "axios";

const privateAPI = axios.create({

  baseURL: import.meta.env.VITE_API_URL,
  // baseURL: "http://localhost:5000",
// m
  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },

  withCredentials: true

});

export default privateAPI;