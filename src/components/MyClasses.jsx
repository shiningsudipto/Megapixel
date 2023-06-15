import { Link, useLocation } from "react-router-dom";
import BtnFuchsia from "./BtnFuchsia";
import useAxiosSecure from "../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const MyClasses = ({ singleClass, refetch }) => {
    const [axiosSecure] = useAxiosSecure();
    const location = useLocation();

    // console.log(location);
    const { name, image, price, instructorName, availableSeats, _id, status } = singleClass;
    const handleDelete = async (singleClass) => {
        const res = await axiosSecure.delete(`/deleteSelectedClass/${singleClass._id}`);
        if (res.data.deletedCount) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Deleted successfully',
                showConfirmButton: false,
                timer: 600
            })
        }
        refetch();
        console.log("delete successful:", res.data.deletedCount);
    }

    const handleStatus = (newStatus, id) => {
        console.log("Approve Button Clicked");
        const payload = { newStatus }; // Create an object with the newStatus property
        fetch(`https://assignment-twelve-server-smoky.vercel.app/classes/approve/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' // Update the header key to 'Content-Type'
            },
            body: JSON.stringify(payload) // Stringify the payload object
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log("newStatus", data);
            });
    };

    return (
        <div>
            <div>
                <div className="card shadow-xl h-full ">
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
                                (
                                    location.pathname === "/dashboard/instructorsclass"
                                    ||
                                    location.pathname === "/dashboard/manageclasses") && (
                                    <p>Status: <span className="text-fuchsia-500">{status}</span></p>
                                )
                            }
                            {
                                (location.pathname === "/dashboard/instructorsclass" && singleClass?.feedback)
                                &&
                                <>
                                    <p>Feedback: <span className="text-fuchsia-500">{singleClass?.feedback}</span></p>
                                </>

                            }
                            {
                                (location.pathname === "/dashboard/instructorsclass")
                                &&
                                <>
                                    <button className="btn bg-fuchsia-500 text-white hover:bg-white font-bold hover:text-fuchsia-500 hover:border-fuchsia-600 hover:border-2">Update</button>
                                </>
                            }
                        </div>
                        {
                            location.pathname === "/dashboard/selectedclass"
                            &&
                            <div className="flex justify-between">
                                {availableSeats !== '0' ? (
                                    <Link to={`/dashboard/payment/${_id}`}>
                                        <button className="btn bg-fuchsia-500 text-white hover:bg-white font-bold hover:text-fuchsia-500 hover:border-fuchsia-600 hover:border-2">Pay</button>
                                    </Link>
                                ) : (
                                    <button className="btn bg-fuchsia-500 text-white hover:bg-white font-bold hover:text-fuchsia-500 hover:border-fuchsia-600 hover:border-2" disabled>
                                        Pay
                                    </button>
                                )}
                                <button onClick={() => handleDelete(singleClass)}><BtnFuchsia btnText={"Delete"}></BtnFuchsia></button>
                            </div>
                        }
                        {
                            location.pathname === "/dashboard/manageclasses"
                            &&
                            <div className="flex justify-between">
                                <button onClick={() => handleStatus("Approved", singleClass._id)}
                                    className="btn bg-fuchsia-500 text-white hover:bg-white font-bold hover:text-fuchsia-500 hover:border-fuchsia-600 hover:border-2"
                                    disabled={singleClass.status === "Approved" || singleClass.status === "Denied"}
                                >
                                    {singleClass.status === "Approved" ? "Approved" : "Approve"}
                                </button>
                                <button onClick={() => handleStatus("Denied", singleClass._id)}
                                    className="btn bg-fuchsia-500 text-white hover:bg-white font-bold hover:text-fuchsia-500 hover:border-fuchsia-600 hover:border-2"
                                    disabled={singleClass.status === "Denied" || singleClass.status === "Approved"}>
                                    {
                                        singleClass.status === "Denied" ? "Denied" : "Deny"
                                    }
                                </button>
                                {/* The button to open modal */}
                                <Link to={`/dashboard/feedback/${singleClass._id}`} className="btn bg-fuchsia-500 text-white hover:bg-white font-bold hover:text-fuchsia-500 hover:border-fuchsia-600 hover:border-2"
                                    disabled={singleClass.status === "Approved"}
                                >
                                    Feedback
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClasses;