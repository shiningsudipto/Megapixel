import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useRole = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // const { data: userRole = [], refetch } = useQuery(['userRoleVerification'],
    //     async () => {
    //         const res = await axiosSecure.get(`/userRole/${user?.email}`);
    //         return res.data;
    //     }
    // )
    // return [userRole, refetch]

    const { data: userRole, isLoading } = useQuery({
        queryKey: ['userRoleVerification', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/userRole/${user?.email}`);
            return res.data;
        }
    });

    return [userRole, isLoading];
};

export default useRole;