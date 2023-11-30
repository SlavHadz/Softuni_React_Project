import { createContext, useState } from "react";
import * as authService from '../services/authService.js';

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useState({});

    const submitLoginHandler = async (username, password) => {
        const result = await authService.login(username, password);
        setAuth(result);
    }

    const submitRegisterHandler = async (username, password) => {
        const result = await authService.register(username, password);
        setAuth(result);
    }

    const logoutHandler = async () => {
        await authService.logout();
        setAuth({});
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