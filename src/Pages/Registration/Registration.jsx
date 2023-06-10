import { useForm } from "react-hook-form";
import PageTitle from "../../components/PageTitle";
import useAuth from "../../Hook/useAuth";
import { useState } from "react";
import SocialLogin from "../../components/SocialLogin";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate();
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
                        const saveUser = { name: data.name, email: data.email, image: data.photoURL, role: 'student' }
                        fetch('http://localhost:5000/newUser', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log("account created");
                                if (data.insertedId) {
                                    navigate('/')
                                }
                            })
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
                        <div className="w-full my-3">
                            <input className="btn w-full bg-fuchsia-600 hover:text-fuchsia-600 text-white font-bold hover:bg-transparent hover:border-2 hover:border-fuchsia-700" type="submit" value="Register" />
                            {/* <BtnFuchsia type="submit" btnText={"Register"}></BtnFuchsia> */}
                        </div>
                    </form>
                    <p>Have an account? Please <Link to="/login" className="text-fuchsia-600">Login</Link> </p>
                    <p className="text-red-600">{error}</p>
                    <div>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
