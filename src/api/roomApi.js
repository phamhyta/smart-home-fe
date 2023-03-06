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

    deleteRoom: (id) => {
        const url=`/room/${id}`;
        return axiosClient.delete(url)
    },

    updateRoom: (params) => {
        const url=`/room/`;
        return axiosClient.put(url, params)
    }
}

export default roomApi;