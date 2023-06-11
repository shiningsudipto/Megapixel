import useClasses from "../../Hook/useClasses";
import SectionTitle from "../../components/SectionTitle";
import ClassCard from "./ClassCard";
import { Slide } from "react-awesome-reveal";

const ClassSection = () => {
    const [classes] = useClasses();
    const slicedClasses = classes.slice(0, 6);
    console.log("total classes:", classes, "slicedClasses:", slicedClasses);
    return (
        <div>
            <div>
                <Slide direction="up">
                    <SectionTitle
                        heading="popular classes"
                        subHeading="Most Enrolled Classes"
                    ></SectionTitle>
                </Slide>

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