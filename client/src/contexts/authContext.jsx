import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService.js';

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const submitLoginHandler = async (formData) => {
        const { email, password } = formData;
        const result = await authService.login(email, password);
        setAuth(result);
        localStorage.setItem('token', result.accessToken);
        navigate('/');
    }

    const submitRegisterHandler = async (formData) => {
        const { email, username, password } = formData;
        const result = await authService.register(email, username, password);
        setAuth(result);
        localStorage.setItem('token', result.accessToken);
        navigate('/');
    }

    const logoutHandler = async () => {
        setAuth({});
        localStorage.removeItem('token');
        navigate('/');
    }
    
    const context = {
        submitLoginHandler,
        submitRegisterHandler,
        logoutHandler,
        isAuthenticated: !!auth.accessToken,
        userId: auth._id,
        username: auth.username
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
}

AuthContext.displayName = "AuthContext";

export default AuthContext;