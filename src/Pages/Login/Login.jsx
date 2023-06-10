import { useForm } from "react-hook-form";
import BtnFuchsia from "../../components/BtnFuchsia";
import PageTitle from "../../components/PageTitle";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import useAuth from "../../Hook/useAuth";
import { useState } from "react";


const Login = () => {
    const { signIn } = useAuth();
    const [error, setError] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then((result) => {
                setError('');
                // Signed in 
                const loggedUser = result.user;
                console.log(loggedUser);
                reset();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage, errorCode)
            });
    }
    return (
        <div>
            <div className="">
                <PageTitle
                    heading={"please login"}
                ></PageTitle>
            </div>
            <div className="container mx-auto">
                <div className="w-1/3 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text"  {...register("email")} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text"  {...register("password")} placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="w-full my-3">
                            <input className="btn w-full bg-fuchsia-600 hover:text-fuchsia-600 text-white font-bold hover:bg-transparent hover:border-2 hover:border-fuchsia-700" type="submit" value="Sign In" />
                        </div>
                    </form>
                    <div>
                        <p>Don't have an account? Please <Link to="/registration" className="text-fuchsia-600">Register</Link></p>
                        <p className="text-red-600 my-3">{error}</p>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;