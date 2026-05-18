import axios from "axios";

const privateAPI = axios.create({

  baseURL: "https://api.gatishiftingpackers.com",
  // baseURL: "http://localhost:5000",

  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },

  withCredentials: true

});

export default privateAPI;