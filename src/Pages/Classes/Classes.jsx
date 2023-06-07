import useClasses from "../../Hook/useClasses";
import SingleClass from "./SingleClass";

const Classes = () => {
    const [classes] = useClasses();
    return (
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                {
                    classes.map(classItem => <SingleClass
                        key={classItem._id}
                        classItem={classItem}
                    ></SingleClass>)
                }
            </div>
        </div>
    );
};

export default Classes;