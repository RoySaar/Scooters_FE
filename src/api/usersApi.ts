import {useAxios} from "./axios";

export const useUsersApi = () => {
    const {axiosInstance} = useAxios();
    return {
        getUsers: async () => {
            const response = await axiosInstance.get('/user');
            return response.data;
        },
        getUser: async (id: string) => {
            const response = await axiosInstance.get(`/user/${id}`);
            return response.data;
        },
        createUser: async (data: any) => {
            const response = await axiosInstance.post('/user', data);
            return response.data;
        },
        updateUser: async (id: string, data: any) => {
            const response = await axiosInstance.put(`/user/${id}`, data);
            return response.data;
        },
        deleteUser: async (id: string) => {
            const response = await axiosInstance.delete(`/user/${id}`);
            return response.data;
        }
    }
}
