import axiosClient from "./axiosClient";

const homeApi = {
  createHome: (body, params) => {
    const url = "/home/";
    return axiosClient.post(url, body, { params });
  },

  getHomeList: (params) => {
    const url = `/home/list`;
    return axiosClient.get(url, { params });
  },

  getAnalytic: () => {
    const url = `/analytic/`;
    return axiosClient.get(url);
  },

  getCurrentAnalytic: () => {
    const url = `/analytic/current`;
    return axiosClient.get(url);
  },

  getAverage: () => {
    const url = `/analytic/average`;
    return axiosClient.get(url);
  },
};

export default homeApi;
