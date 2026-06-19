import axios from "axios";

const API_URL =
//   "https://api.gatishiftingpackers.com/api/employees";
  "https://api.gatishiftingpackers.com/api/employees";

export const createEmployee = (data: any) => {
  return axios.post(`${API_URL}/create`, data);
};

export const getEmployees = () => {
  return axios.get(`${API_URL}/all`);
};