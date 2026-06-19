import axios from "axios";

const API =
  "https://api.gatishiftingpackers.com";

export const checkIn = (
  employeeId: string
) => {
  return axios.post(
    `${API}/attendance/check-in`,
    {
      employeeId,
    }
  );
};

export const checkOut = (
  employeeId: string
) => {
  return axios.post(
    `${API}/attendance/check-out`,
    {
      employeeId,
    }
  );
};