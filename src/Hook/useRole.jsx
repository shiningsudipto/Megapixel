import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRole = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: userRole = [], refetch } = useQuery(['userRoleVerification'],
        async () => {
            const res = await axiosSecure.get(`/userRole/${user?.email}`);
            return res.data;
        }
    )
    return [userRole, refetch]
};

export default useRole;