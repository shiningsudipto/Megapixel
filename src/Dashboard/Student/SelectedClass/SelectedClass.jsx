import useMyClassesData from "../../../Hook/useMyClasses";
import MyClasses from "../../../components/MyClasses";

const SelectedClass = () => {
    const { myClasses, refetch } = useMyClassesData();
    console.log("My selected class", myClasses);
    return (
        <div>
            <div>
                <h3 className="text-3xl font-bold text-center my-6 text-fuchsia-500">Total Selected Class: {myClasses.length}</h3>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 my-8">
                {
                    myClasses.map(myClass => <MyClasses
                        key={myClass._id}
                        singleClass={myClass}
                        refetch={refetch}
                    ></MyClasses>)
                }
            </div>
        </div>
    );
};

export default SelectedClass;