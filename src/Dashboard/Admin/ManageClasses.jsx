import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import MyClasses from "../../components/MyClasses";

const ManageClasses = () => {
    const [axiousSecure] = useAxiosSecure();
    const { data: allClasses = [], refetch, isLoading } = useQuery(['allClasses'],
        async () => {
            const res = await axiousSecure.get('/manageClasses');
            return res.data;
        }
    )
    if (isLoading) {
        return <span className="loading loading-ring loading-lg"></span>
    }



    console.log("All Classes:", allClasses);
    return (
        <div>
            <div className="text-center">
                <h2 className="text-3xl font-bold text-fuchsia-500 text-center">Manage Classes</h2>
                <h3 className="text-xl font-semibold">Total Class: <span className="text-fuchsia-500">{allClasses.length}</span></h3>
            </div>
            <div className="grid grid-cols-2 gap-8">
                {
                    allClasses.map(singleClass => <MyClasses
                        key={singleClass._id}
                        singleClass={singleClass}
                        refetch={refetch}
                    ></MyClasses>)
                }
            </div>
        </div>
    );
};

export default ManageClasses;