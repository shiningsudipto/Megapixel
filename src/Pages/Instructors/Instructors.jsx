
import useInstructors from "../../Hook/useInstructors";
import InstructorCard from "../../components/InstructorCard";

const Instructors = () => {
    const [instructors] = useInstructors();
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-14">
                    {
                        instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;