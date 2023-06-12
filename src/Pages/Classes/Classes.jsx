import useClasses from "../../Hook/useClasses";
import PageTitle from "../../components/PageTitle";
import SingleClass from "./SingleClass";

const Classes = () => {
    const [classes, isLoading] = useClasses();
    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-ring loading-lg"></span>
        </div>;
    }
    return (
        <div>
            <div>
                <PageTitle
                    heading={"Our Classes"}
                    subHeading={"Select your desired course and enroll"}
                ></PageTitle>
            </div>
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