import About from "./About";
import ClassSection from "./ClassSection";
import InstructorSection from "./InstructorSection";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <ClassSection />
            <InstructorSection />
            <About />
        </div>
    );
};

export default Home;