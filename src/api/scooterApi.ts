import {useAxios} from "./axios";
import {ScooterStatus} from "../types/types";

export const useScooterApi = () => {
    const {axiosInstance} = useAxios();
    return {
        getScootersByStatus: async (status: ScooterStatus) => {
            const response = await axiosInstance.get(`/scooter/status`, {
                params: {
                    status: status
                }
            });
            return response.data;
        },
        getScooters: async () => {
            const response = await axiosInstance.get('/scooter');
            return response.data;
        },
        getScooter: async (id: string) => {
            const response = await axiosInstance.get(`/scooter/${id}`);
            return response.data;
        },
        createScooter: async (data: any) => {
            const response = await axiosInstance.post('/scooter', data);
            return response.data;
        },
        updateScooter: async (id: string, data: any) => {
            const response = await axiosInstance.put(`/scooter/${id}`, data);
            return response.data;
        },
        deleteScooter: async (id: string) => {
            const response = await axiosInstance.delete(`/scooter/${id}`);
            return response.data;
        }
    }
}
