import axios from "axios";
import { API_URL } from "../config";

const apiRequest = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true,
});

// Add token to all requests
apiRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiRequest;
