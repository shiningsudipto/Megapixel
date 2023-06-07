import BtnFuchsia from "../../components/BtnFuchsia";

const SingleClass = ({ classItem }) => {
    const { image, name, instructorName, price, availableSeats, _id } = classItem;
    return (
        <div>
            <div className="card shadow-xl h-full">
                <figure className="px-6 pt-6">
                    <img src={image} alt="class" className="rounded-xl h-[270px]" />
                </figure>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-fuchsia-500">{name}</h2>
                    <h3 className="text-xl font-bold">Instructor: {instructorName}</h3>
                    <div className="font-semibold">
                        <p>Available Seats: {availableSeats}</p>
                        <p>Price: {price}</p>
                    </div>
                    <BtnFuchsia btnText={"SELECT"}></BtnFuchsia>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;