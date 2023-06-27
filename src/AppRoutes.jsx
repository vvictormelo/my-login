import React, { useContext } from "react";

import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPages';

import { AuthContext, AuthProvider } from "./contexts/auth";

const AppRoutes = () => {

    const Private = ({ children }) => {
        const { authenticated } = useContext(AuthContext);

        if (!authenticated) {
            return <Navigate to="/login"></Navigate>
        }

        return children;
    };

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/" element={<Private><HomePage/></Private>}/>
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;