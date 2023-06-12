const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="lg:w-5/12 text-center mx-auto lg:my-14 my-8">
            <h2 className="lg:text-4xl text-2xl text-fuchsia-600 font-semibold  py-4 uppercase">{heading}</h2>
            <h3 className="mb-3 text-xl">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;