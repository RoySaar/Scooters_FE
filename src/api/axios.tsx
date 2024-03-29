import React, {createContext, PropsWithChildren, useContext, useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import {noop} from "lodash";

const BASE_URL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('userToken');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const AxiosContext = createContext({
    axiosInstance,
    isAuthenticated: false,
    setIsAuthenticated: noop,
    isReady: false
});
export const useAxios = () => useContext(AxiosContext);

export const AxiosProvider = ({children}: PropsWithChildren) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        console.log({token})
        setIsAuthenticated(!!token);
        setIsReady(true);
    }, []);

    const value = useMemo(() => ({
        axiosInstance,
        isAuthenticated,
        setIsAuthenticated,
        isReady
    }), [isAuthenticated, setIsAuthenticated, isReady])

    return (
        <AxiosContext.Provider value={value}>
            {children}
        </AxiosContext.Provider>
    );
};
