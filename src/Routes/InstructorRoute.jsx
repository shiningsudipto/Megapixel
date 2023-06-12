
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import useInstructor from "../Hook/useInstructor";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();

    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-ring loading-lg"></span>
        </div>;
    }
    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;