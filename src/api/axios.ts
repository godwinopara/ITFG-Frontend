import axios from "axios";
import toast from "react-hot-toast";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://itfg-backend.onrender.com/api",
});

// Request interceptor to include JWT in headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle JWT expiration or invalid token
axiosInstance.interceptors.response.use(
  (response) => {
    // If the response is successful, return the response
    return response;
  },
  (error) => {
    const { response } = error;

    // Check if the error is a 401 Unauthorized or token is expired
    if (response && response.status === 404) {
      // Token is missing or expired, clear localStorage
      localStorage.removeItem("token");

      // Redirect to login page
      //window.location.href = "/signin"; // Change to your login route

      // Optionally display an error message
      toast.error("Session expired");
    }

    // Reject the error
    return Promise.reject(error);
  }
);

export default axiosInstance;
