import privateAPI from "../api/privateAxios";

export const createEmployee = (data: any) => {
  return privateAPI.post(`/api/employees/create`, data);
};

export const getEmployees = () => {
  return privateAPI.get(`/api/employees/all`);
};