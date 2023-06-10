import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import MyClasses from "../../components/MyClasses";

const InstructorsClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: myAddedClasses = [] } = useQuery(['instructorsAddedClass', user?.email],
        async () => {
            const res = await axiosSecure.get(`/instructorsAddedClass/${user?.email}`)
            return res.data
        }
    );

    console.log(myAddedClasses);

    return (
        <div className="w-full px-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-fuchsia-500 my-3"> My Class</h2>
                <h3 className="text-xl font-semibold">My Total Added Class: <span className="text-fuchsia-500">{myAddedClasses.length}</span></h3>
            </div>
            <div className="grid grid-cols-2 gap-8">
                {Array.isArray(myAddedClasses) && myAddedClasses.map(singleClass => (
                    <MyClasses key={singleClass._id} singleClass={singleClass} />
                ))}
            </div>
        </div>
    );
};

export default InstructorsClass;
