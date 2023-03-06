import axiosClient from "./axiosClient";

const deviceApi = {
    createDevice: (params) => {
        const url = '/device/';
        return axiosClient.post(url, params)
    },

    getDeviceList: (params) => {
        const url = '/device/list';
        return axiosClient.get(url, {params});
    },

    toggleStatus: (id) => {
        const url=`/device/?deviceId=${id}`;
        return axiosClient.put(url)
    }
}

export default deviceApi;