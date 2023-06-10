import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import BtnFuchsia from "../../components/BtnFuchsia";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleClass = ({ classItem }) => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { image, name, instructorName, price, availableSeats } = classItem;

    const handleSelectClass = async (classItem) => {
        if (!user) {
            toast("Log in before selecting the course")
            return;
        }
        const { image, name, instructorName, price, _id } = classItem;
        const selectedClass = {
            studentEmail: user.email,
            image,
            name,
            instructorName,
            price,
            availableSeats,
            ClassId: _id,
        };
        try {
            console.log(selectedClass);
            const response = await axiosSecure.post('/selectedClass', selectedClass);
            // Handle success, e.g., display a success message or redirect the user
            console.log('Class successfully posted!');
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

    return (
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
                    </div>
                    <button onClick={() => handleSelectClass(classItem)}>
                        <BtnFuchsia btnText={"SELECT"}></BtnFuchsia>
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingleClass;