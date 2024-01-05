// api/axiosClient.js
import axios from "axios";

const sTag = "[AxiosClient]";

const axiosClient = axios.create({
  // baseURL: "http://172.20.10.2:8080/api/",
  baseURL:"http://localhost:8080/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
