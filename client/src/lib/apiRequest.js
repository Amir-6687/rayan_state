import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:8800/api",
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
  }
);

export default apiRequest;
