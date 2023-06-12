import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: allUsers = [], refetch, isLoading } = useQuery(['allRegisteredUsers'],
        async () => {
            const res = await axiosSecure.get('/allRegisteredUsers');
            return res.data;
        }
    )
    return [allUsers, refetch, isLoading]
};

export default useUsers;