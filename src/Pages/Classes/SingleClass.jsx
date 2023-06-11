import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useRole from "../../Hook/useRole";



const SingleClass = ({ classItem }) => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [userRole] = useRole();
    const role = userRole.role;
    console.log('user role:', role);



    const { image, name, instructorName, price, availableSeats } = classItem;

    const handleSelectClass = async (classItem) => {
        if (!user) {
            toast("Log in before selecting the course")
            return;
        }
        const { image, name, instructorName, price, _id, instructorEmail } = classItem;
        const selectedClass = {
            studentEmail: user.email,
            image,
            name,
            instructorName,
            price,
            availableSeats,
            ClassId: _id,
            instructorEmail
        };
        try {
            console.log(selectedClass);
            const response = await axiosSecure.post('/selectedClass', selectedClass);
            if (response.data.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Course Added',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        } catch (error) {
            console.error(error);
            // Handle error, e.g., display an error message
        }
    };

    const isDisabled = role === 'Admin' || role === 'Instructor' || availableSeats === '0';

    return (
        <div>
            <div className={`card shadow-xl h-full ${classItem.availableSeats === '0' ? 'bg-red-500 text-white' : ''}`}>
                <figure className="px-6 pt-6">
                    <img src={image} alt="class" className="rounded-xl h-[270px]" />
                </figure>
                <div className="card-body">
                    <h2 className={`text-2xl font-semibold ${classItem.availableSeats === '0' ? 'text-white' : 'text-fuchsia-600'} `}>{name}</h2>
                    <h3 className="text-xl font-bold">Instructor: {instructorName}</h3>
                    <div className="font-semibold">
                        <p>Available Seats: {availableSeats}</p>
                        <p>Price: {price}</p>
                    </div>
                    <button onClick={() => handleSelectClass(classItem)}
                        disabled={isDisabled}
                        className="btn bg-fuchsia-500 text-white hover:bg-white font-bold hover:text-fuchsia-500 hover:border-fuchsia-600 hover:border-2"
                    >
                        SELECT
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingleClass;