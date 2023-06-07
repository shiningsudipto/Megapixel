import { useLocation } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
    const { name, image, email } = instructor;
    const location = useLocation();
    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg p-4 overflow-hidden shadow-lg hover:shadow-2xl">
            <img src={image} className="w-[330px] rounded-lg h-[450px]" alt="" />
            <div className="py-4">
                <h3 className="text-3xl font-bold text-fuchsia-500 my-2">{name}</h3>
                {
                    location.pathname === '/instructors' && <div>
                        <h3 className="text-xl font-semibold">Email: {email}</h3>
                    </div>
                }
            </div>
        </div>
    );
};

export default InstructorCard;