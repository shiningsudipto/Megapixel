import BtnFuchsia from "../../components/BtnFuchsia";
import PageTitle from "../../components/PageTitle";


const Login = () => {
    return (
        <div>
            <div className="">
                <PageTitle
                    heading={"please login"}
                ></PageTitle>
            </div>
            <div className="container mx-auto">
                <div className="w-1/3 mx-auto">
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="w-full">
                            <BtnFuchsia btnText={"Login"}></BtnFuchsia>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;