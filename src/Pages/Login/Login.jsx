import { useForm } from "react-hook-form";
import BtnFuchsia from "../../components/BtnFuchsia";
import PageTitle from "../../components/PageTitle";


const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
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
                        <div className="w-full">
                            <BtnFuchsia type="submit" btnText={"Login"}></BtnFuchsia>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;