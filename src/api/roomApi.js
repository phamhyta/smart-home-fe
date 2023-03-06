import axiosClient from "./axiosClient";

const roomApi = {
    createRoom: (params) => {
        const url = '/room/';
        return axiosClient.post(url, params);
    },

    getRoomList: (id) => {
        const url = `/room/list/${id}`;
        return axiosClient.get(url);
    },
}

export default roomApi;