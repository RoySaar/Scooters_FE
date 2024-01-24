import {useAxios} from "../api/axios";

export const useIsAuthenticated = () => {
    const {isAuthenticated,setIsAuthenticated} = useAxios();

    return {isAuthenticated, setIsAuthenticated}
}
