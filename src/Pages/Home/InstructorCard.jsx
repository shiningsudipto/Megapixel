
const InstructorCard = ({ instructor }) => {
    const { name, image } = instructor;
    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg p-4 overflow-hidden shadow-lg hover:shadow-2xl">
            <img src={image} className="w-[330px] rounded-lg h-[450px]" alt="" />
            <div className="p-4">
                <h3 className="text-3xl font-bold text-fuchsia-500">{name}</h3>
            </div>
        </div>
    );
};

export default InstructorCard;