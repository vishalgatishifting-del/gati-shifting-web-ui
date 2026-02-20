import axios from "axios";

const privateAPI = axios.create({

  baseURL: "https://api.gatishiftingpackers.com",

  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },

  withCredentials: true

});

export default privateAPI;