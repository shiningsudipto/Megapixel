
import useEnrolledClass from "../../../Hook/useEnrolledClass";

const EnrolledClass = () => {
    // const { user } = useAuth();
    // const [axiosSecure] = useAxiosSecure();
    // const { data: myEnrolledClass = [] } = useQuery(['myEnrolledClass', user?.email],
    //     async () => {
    //         const res = await axiosSecure.get(`/myEnrolledClass/${user?.email}`);
    //         return res.data;
    //     }
    // )
    const [myEnrolledClass, isLoading] = useEnrolledClass();
    console.log("myEnrolledClass", myEnrolledClass);
    return (
        <div className="lg:mx-10">
            <div>
                <div className="my-14 text-center">
                    <h3 className="text-3xl font-bold text-fuchsia-500">My Total Enrolled Class: {myEnrolledClass.length}</h3>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                    {
                        myEnrolledClass.map(enrolledClass =>
                            <div key={enrolledClass._id}>
                                <div className="relative group">
                                    <img
                                        src={enrolledClass.image}
                                        className="h-96 w-full object-cover"
                                        alt=""
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-75 text-white font-bold text-2xl group-hover:text-fuchsia-600">
                                        {enrolledClass.name}
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default EnrolledClass;