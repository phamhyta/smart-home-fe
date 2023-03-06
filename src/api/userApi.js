import axiosClient from "./axiosClient";

const userApi = {
    createUser: (body, params) => {
        const url = '/user/';
        return axiosClient.post(url, body, {params});
    },

    getUserList: (id) => {
        const url = `/user/list/${id}`;
        return axiosClient.get(url);
    },
}

export default userApi;