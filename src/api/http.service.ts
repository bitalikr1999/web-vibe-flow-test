import axios from "axios";

import { storageService } from "@/services/storage.service";
import { config } from "@/config";
import { authService } from "@/services/auth.service";

const axiosInstance = axios.create({
  baseURL: config.API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  },
  timeout: 180000,
});

axiosInstance.interceptors.request.use(async (config) => {
  try {
    const token = storageService.get("accessToken");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
  } catch (e) {
    console.log(e);
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        authService.logout();
      }
    }

    return Promise.reject(error);
  }
);

export const http = axiosInstance;
