import useMyClassesData from "../../../Hook/useMyClasses";

const SelectedClass = () => {
    const { data, refetch } = useMyClassesData();
    console.log(data);
    return (
        <div>

        </div>
    );
};

export default SelectedClass;