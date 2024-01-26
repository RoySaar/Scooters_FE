import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {LoginPage} from "./pages/login-page/login-page";
import {useIsAuthenticated} from "./hooks/useIsAuthenticated";
import {Scooters} from "./pages/scooters/scooters";
import {Users} from './pages/users/users';
import {NewParking} from "./pages/new-parking/new-parking";
import {Parking} from './pages/parking/parking';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Register} from "./pages/register/register";
import {PrivateRoute} from "./components/private-route";
import {useAxios} from "./api/axios";

const App = () => {
    const {isAuthenticated} = useIsAuthenticated()
    const {isReady} = useAxios();

    if (!isReady) {
        return <>Loading...</>
    }

    return (
        <Router>
            <Routes>
                <Route
                    path="/scooters"
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <Scooters/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/users"
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <Users/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/new-parking"
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <NewParking/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/parking"
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <Parking/>
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
            <ToastContainer/>
        </Router>
    );
};

export default App;
