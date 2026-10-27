import axios, { AxiosError } from "axios";
import { type ContactFormValues } from "@/components/Home/ContactForm";
import { type DemoFormValues } from "@/pages/BookDemo";

const BASE_URL = "http://localhost:8000/api/website";
// const BASE_URL = "https://admin.rewardsapp.in/api/website";

export interface ApiResponse {
  success: boolean;
  message: string;
  error: string | null;
}

export const signUpLead = async (
  data: ContactFormValues,
): Promise<ApiResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}/leads`, data);
    return {
      success: true,
      message:
        response.data.message ||
        "Thank you! Your application has been submitted.",
      error: null,
    };
  } catch (err) {
    const error = err as AxiosError<any>;
    return {
      success: false,
      error: error.response?.data?.message || "Failed to submit lead.",
      message: "",
    };
  }
};

export const bookDemoRequest = async (
  data: DemoFormValues,
): Promise<ApiResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}/demo-requests`, data);
    return {
      success: true,
      message: response.data.message || "Demo request received!",
      error: null,
    };
  } catch (err) {
    const error = err as AxiosError<any>;
    return {
      success: false,
      error: error.response?.data?.message || "Failed to submit demo request.",
      message: "",
    };
  }
};
