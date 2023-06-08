import { Link, useLocation } from "react-router-dom";
import BtnFuchsia from "./BtnFuchsia";
import useAxiosSecure from "../Hook/useAxiosSecure";

const MyClasses = ({ singleClass, refetch }) => {
    const [axiosSecure] = useAxiosSecure();
    const location = useLocation();
    // console.log(location);
    const { name, image, price, instructorName, availableSeats, _id, status } = singleClass;
    const handleDelete = async (singleClass) => {
        const res = await axiosSecure.delete(`/deleteSelectedClass/${singleClass._id}`);
        refetch();
        console.log("delete successful:", res.data.deletedCount);
    }
    return (
        <div>
            <div>
                <div className="card shadow-xl h-full">
                    <figure className="px-6 pt-6">
                        <img src={image} alt="class" className="rounded-xl h-[270px]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold text-fuchsia-600">{name}</h2>
                        <h3 className="text-xl font-bold">Instructor: {instructorName}</h3>
                        <div className="font-semibold">
                            <p>Available Seats: {availableSeats}</p>
                            <p>Price: {price}</p>
                            {
                                location.pathname === "/dashboard/instructorsclass"
                                &&
                                <p>Status: <span className="text-fuchsia-500">{status}</span></p>
                            }
                        </div>
                        {
                            location.pathname === "/dashboard/selectedclass"
                            &&
                            <div className="flex justify-between">
                                <Link to={`/dashboard/payment/${_id}`}>
                                    <button><BtnFuchsia btnText={"Pay"}></BtnFuchsia></button>
                                </Link>
                                <button onClick={() => handleDelete(singleClass)}><BtnFuchsia btnText={"Delete"}></BtnFuchsia></button>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClasses;