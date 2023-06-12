import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyClassesData = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    // const { data: myClasses = [], isLoading, error, refetch } = useQuery(['myclass', user?.email], async () => {
    //     const response = await axiosSecure.get(`/myclass/${user?.email}`);
    //     return response.data;
    // });
    // console.log(myClasses);
    // return { myClasses, isLoading, error, refetch };

    const { data: myClasses = [], isLoading, refetch } = useQuery({
        queryKey: ['myclass', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/myclass/${user?.email}`);
            return res.data.instructor;
        }
    });
    return { myClasses, isLoading, refetch }
};

export default useMyClassesData;
