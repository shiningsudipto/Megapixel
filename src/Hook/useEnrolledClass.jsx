import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolledClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: myEnrolledClass = [], isLoading } = useQuery(['myEnrolledClass', user?.email],
        async () => {
            const res = await axiosSecure.get(`/myEnrolledClass/${user?.email}`);
            return res.data;
        }
    )
    return [myEnrolledClass, isLoading]
};

export default useEnrolledClass;