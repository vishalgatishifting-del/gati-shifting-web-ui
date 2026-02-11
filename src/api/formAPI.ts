import axios from "axios";
import axiosInstance from "./axiosInstance";

interface FormData {
  Name: string;
  Email: string;
  Phone: string;
  From: string;
  To: string;
  Goods: string;
  SourceWebsite?: string;
}

export const submitForm = async (data: FormData) => {

  try {
    const backendResponse = await axiosInstance.post("/create-lead", {
      ...data,
      SourceWebsite: data.SourceWebsite || "Gati Shifting Packers",
    });

    axios.post(
      "https://script.google.com/macros/s/AKfycbwx0nY0P8Z2ydcecNzI1gS0Tvj_gz8G2zxY_Jt1FS4kdaw-IASVsw5s7ZSQiZxikWkVtQ/exec",
      JSON.stringify({
        id: "Website",
        ad_id: "Website",
        ad_name: "Website",
        adset_id: "Website",
        adset_name: "Website",
        campaign_id: "Website",
        campaign_name: "Website",
        form_id: "Website",
        form_name: "Website",
        is_organic: "true",
        platform: "Website",
        full_name: data.Name,
        "Column 1": data.Phone,
        email: data.Email,
        lead_status: "CREATED",
        "Lead Notes": "",
        Update: ""
      }),
      {
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        }
      }
    );
    return backendResponse;
  }
  catch (err){
    console.log("error")
    throw err;
  }
};
