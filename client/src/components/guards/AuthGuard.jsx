import { useContext } from "react";
import AuthContext from "../../contexts/authContext.jsx";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    if(!isAuthenticated) {
        return <Navigate to={'/login'} />
    }

    return <Outlet />
}