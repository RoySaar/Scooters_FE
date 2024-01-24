import {useAxios} from "./axios";
import {Parking} from "../types/types";

export const useParkingApi = () => {
    const {axiosInstance} = useAxios();
    return {
        getParkings: async () => {
            const response = await axiosInstance.get('/parking');
            return response.data;
        },
        getParking: async (id: string) => {
            const response = await axiosInstance.get(`/parking/${id}`);
            return response.data;
        },
        createParking: async (data: Parking) => {
            const response = await axiosInstance.post('/parking', data);
            return response.data;
        },
        updateParking: async (id: string, data: any) => {
            const response = await axiosInstance.put(`/parking/${id}`, data);
            return response.data;
        },
        deleteParking: async (id: string) => {
            const response = await axiosInstance.delete(`/parking/${id}`);
            return response.data;
        }
    }
}
