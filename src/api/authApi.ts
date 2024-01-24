import {useAxios} from "./axios";
import {User} from "../types/types";
import Cookies from 'js-cookie';

export const useAuthApi = () => {
    const {axiosInstance} = useAxios();
    const AUTH = 'auth';

    return {
        login: async (username: string, password: string) => {
            const response = await axiosInstance.post(`${AUTH}/login`, {username, password});
            const {token} = response.data;
            Cookies.set('userToken', token);
        },
        register: async (newUser: Partial<User>) => {
            const response = await axiosInstance.post(`${AUTH}/register`, {...newUser});
            return response.data;
        }
    }
}