import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService.js';

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const submitLoginHandler = async (username, password) => {
        const result = await authService.login(username, password);
        setAuth(result);
        navigate('/');
    }

    const submitRegisterHandler = async (username, password) => {
        const result = await authService.register(username, password);
        setAuth(result);
        navigate('/');
    }

    const logoutHandler = async () => {
        await authService.logout();
        setAuth({});
        navigate('/');
    }
    
    const context = {
        submitLoginHandler,
        submitRegisterHandler,
        logoutHandler
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
}

AuthContext.displayName = "AuthContext";

export default AuthContext;