
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-ring loading-lg"></span>
        </div>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
