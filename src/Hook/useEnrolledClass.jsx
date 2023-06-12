import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolledClass = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // const { data: myEnrolledClass = [], isLoading } = useQuery(['myEnrolledClass', user?.email],
    //     async () => {
    //         const res = await axiosSecure.get(`/myEnrolledClass/${user?.email}`);
    //         return res.data;
    //     }
    // )
    // return [myEnrolledClass, isLoading]

    const { data: myEnrolledClass = [], isLoading, refetch } = useQuery({
        queryKey: ['myEnrolledClass', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/myEnrolledClass/${user?.email}`);
            return res.data;
        }
    });
    return [myEnrolledClass, isLoading, refetch]
};

export default useEnrolledClass;