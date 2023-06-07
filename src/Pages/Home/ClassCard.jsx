
const ClassCard = ({ classItem }) => {
    const { image, name } = classItem;
    return (
        <div>
            <div className="relative group">
                <img
                    src={image}
                    className="h-96 w-full object-cover"
                    alt=""
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-75 text-white font-bold text-2xl group-hover:text-fuchsia-600">
                    {name}
                </div>
            </div>
        </div>

    );
};

export default ClassCard;