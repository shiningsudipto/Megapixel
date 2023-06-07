import { useForm } from "react-hook-form";
import BtnFuchsia from "../../components/BtnFuchsia";
import PageTitle from "../../components/PageTitle";
import useAuth from "../../Hook/useAuth";
import { useState } from "react";

const Registration = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then((result) => {
                setError('');
                // Signed in 
                const user = result.user;
                console.log(user);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('Profile updated');
                    }).catch((error) => {
                        setError(error)
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage, errorCode)
            });
    };
    const password = watch("password");

    return (
        <div>
            <div className="">
                <PageTitle heading={"please login"}></PageTitle>
            </div>
            <div className="container mx-auto">
                <div className="w-1/3 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Your name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                {...register("email", { required: true })}
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photoURL"
                                {...register("photoURL", { required: true })}
                                placeholder="Photo URL"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                                    })}
                                placeholder="password"
                                className="input input-bordered"
                            />
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase, and one special character.</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) => value === password,
                                })}

                                placeholder="confirm password"
                                className="input input-bordered"
                            />
                            {errors.confirmPassword && (
                                <p className="text-error">Passwords do not match</p>
                            )}
                        </div>
                        <div className="w-full">
                            <BtnFuchsia type="submit" btnText={"Register"}></BtnFuchsia>
                        </div>
                    </form>
                    <p className="text-red-600">{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
