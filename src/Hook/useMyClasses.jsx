import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyClassesData = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data, isLoading, error, refetch } = useQuery(['myclass', user?.email], async () => {
        const response = await axiosSecure.get(`/myclass/${user?.email}`);
        return response.data;
    });

    return { data, isLoading, error, refetch };
};

export default useMyClassesData;
