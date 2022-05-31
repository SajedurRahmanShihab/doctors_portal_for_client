import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function PrivateOutlet({ children }) {
    let location = useLocation();
    const { user } = useAuth();
    return user.email ? children : <Navigate to="/login" replace state={{ from: location }} />
}