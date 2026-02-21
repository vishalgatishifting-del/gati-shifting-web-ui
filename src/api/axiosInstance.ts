import axios from "axios";
// https://api.gatishiftingpackers.com
const axiosInstance = axios.create({
  baseURL: "https://api.gatishiftingpackers.com", 
  // baseURL: "http://localhost:5000", 
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
