import React, {createContext, PropsWithChildren, useContext, useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import {noop} from "lodash";

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    // other global config
});

// Add request interceptor
axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('userToken');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Create context
export const AxiosContext = createContext({axiosInstance, isAuthenticated: false, setIsAuthenticated: noop, isReady: false});
export const useAxios = () => useContext(AxiosContext);
// Provider component
export const AxiosProvider = ({children}: PropsWithChildren) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isReady, setIsReady]  = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        console.log({token})
        setIsAuthenticated(!!token);
        setIsReady(true);
    },[]);

    const value = useMemo(() => ({axiosInstance, isAuthenticated, setIsAuthenticated,isReady}), [axiosInstance, isAuthenticated, setIsAuthenticated,isReady ])

    return (
        <AxiosContext.Provider value={value}>
            {children}
        </AxiosContext.Provider>
    );
};
