import { axiosInstance } from "@/utils/apiConfig";
import React from "react";

const getAppConfig = async () => {
  const data = await axiosInstance.get("/rest/tesseract/v1/config/app");
};
const getActiveLoads = async () => {
  const data = await axiosInstance.get("/rest/tesseract/v1/load?state-id=1");
};
const LoadsTemplate = async () => {
  getAppConfig();
  getActiveLoads();

  return <div>LoadsTemplate</div>;
};

export default LoadsTemplate;
