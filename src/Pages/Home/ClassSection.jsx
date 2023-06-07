import useClasses from "../../Hook/useClasses";
import SectionTitle from "../../components/SectionTitle";
import ClassCard from "./ClassCard";

const ClassSection = () => {
    const [classes] = useClasses();
    const slicedClasses = classes.slice(0, 6);
    console.log("total classes:", classes, "slicedClasses:", slicedClasses);
    return (
        <div>
            <div>
                <SectionTitle
                    heading="popular classes"
                    subHeading="Most Enrolled Classes"
                ></SectionTitle>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1">
                {
                    slicedClasses.map(classItem => (
                        <ClassCard
                            key={classItem._id}
                            classItem={classItem}
                        ></ClassCard>
                    ))
                }

            </div>
        </div>
    );
};

export default ClassSection;