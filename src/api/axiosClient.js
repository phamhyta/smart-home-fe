// api/axiosClient.js
import axios from "axios";

const sTag = "[AxiosClient]";

const axiosClient = axios.create({
  baseURL: "http://10.14.43.204:8080/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
