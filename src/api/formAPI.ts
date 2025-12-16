import axiosInstance from "./axiosInstance";

interface FormData {
  Name: string;
  Email: string;
  Phone: string;
  From: string;
  To: string;
  Goods: string;
}

export const submitForm = (data: FormData) => {
  return axiosInstance.post("/create-lead", data);
};
