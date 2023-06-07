const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-5/12 text-center mx-auto my-14">
            <h2 className="text-4xl text-fuchsia-600 font-semibold  py-4 uppercase">{heading}</h2>
            <h3 className="mb-3 text-xl">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;