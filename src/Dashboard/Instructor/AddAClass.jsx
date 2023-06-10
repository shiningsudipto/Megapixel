import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import BtnFuchsia from "../../components/BtnFuchsia";

const AddAClass = () => {
    const { user } = useAuth();
    console.log(user);
    const [axiosSecure] = useAxiosSecure();
    const imageHostingToken = import.meta.env.VITE_Image_Upload_Token;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(imageHostingURL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, availableSeats, instructorName, instructorEmail } = data;
                    const newItem = { name, availableSeats, price: parseFloat(price), instructorName, instructorEmail, image: imgURL, 'status': 'Pending' }
                    console.log(newItem);
                    axiosSecure.post('/instructorAddedClasses', newItem)
                        .then(data => {
                            console.log('posted to the database', data.data);
                            if (data.data.insertedId) {
                                reset();
                                console.log('class added');
                            }
                        })
                }
                console.log(imgResponse);
            })

        console.log(data)
    };
    return (
        <div className="w-full">
            <div>

            </div>
            <h3 className="text-3xl font-bold text-fuchsia-500 text-center mt-8 mb-4">Add A Class</h3>
            <div className="">
                <div className=" lg:w-1/2 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text"
                                {...register("name", { required: true })}
                                placeholder="Class Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Upload Image</span>
                            </label>
                            <input type="file"
                                {...register("image", { required: true })}
                                className="file-input file-input-bordered w-full" />
                        </div>
                        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input type="number"
                                    {...register("availableSeats", { required: true })}
                                    placeholder="Available Seats" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number"
                                    {...register("price", { required: true })}
                                    placeholder="Price" className="input input-bordered" />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text"
                                {...register("instructorName")}
                                className="input input-bordered"
                                readOnly
                                defaultValue={user?.displayName} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="text"
                                {...register("instructorEmail")}
                                className="input input-bordered"
                                readOnly
                                defaultValue={user?.email} />
                        </div>

                        <button className="w-full"><BtnFuchsia btnText={"Add Class"}></BtnFuchsia> </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddAClass;