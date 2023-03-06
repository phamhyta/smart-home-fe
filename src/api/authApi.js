import axiosClient from "./axiosClient";

const authApi = {
    signIn: (params) => {
        const url = '/auth/signin';
        return axiosClient.post(url, params)
    },

    signUp: (params) => {
        const url = '/auth/signup';
        return axiosClient.post(url, params);
    },

    getAccountInfor: (params) => {
        const url = '/auth/my-information';
        return axiosClient.get(url, {params});
    },

    getMyDevices: (params) => {
        const url = '/auth/my-devices';
        return axiosClient.get(url, {params});
    },

    logOut: () => {
        const url = '/auth/logout';
        return axiosClient.post(url);
    }
}

export default authApi;