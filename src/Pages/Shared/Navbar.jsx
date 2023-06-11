import { Link } from "react-router-dom";
import logo from '../../../public/megapixel-fuchsia.png'
import useAuth from "../../Hook/useAuth";
import useAdmin from "../../Hook/useAdmin";
import useInstructor from "../../Hook/useInstructor";
import useStudent from "../../Hook/useStudent";
const Navbar = () => {
    const [isAdmin] = useAdmin();
    console.log("User role", isAdmin);
    const [isInstructor] = useInstructor();
    // console.log(isInstructor);
    const [isStudent] = useStudent();
    // console.log(isStudent);

    const { logOut, user } = useAuth();
    // console.log(user);
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        {
            isAdmin &&
            <li><Link to='/dashboard/manageclasses'>Dashboard</Link></li>
        }
        {
            isInstructor && <li><Link to='/dashboard/instructorsclass'>Dashboard</Link></li>
        }
        {
            isStudent && <li><Link to='/dashboard/selectedclass'>Dashboard</Link></li>
        }

    </>
    const siteName = <>
        <Link to='/'>Megapixel</Link>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('successfully logged out');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>

            <div className="navbar text-fuchsia-400 fixed z-10 bg-slate-950 bg-opacity-80">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img src={logo} className="lg:h-14 h-10" alt="" />
                        <p className="cursor-pointer text-3xl font-semibold ms-3">{siteName}</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <img src={user?.photoURL} className="h-12 rounded-full mx-4 border border-2 border-fuchsia-500" alt="" />
                    }

                    {
                        user ?
                            <p onClick={handleLogOut} className="border border-2 border-fuchsia-600 rounded-lg py-2 px-3 text-fuchsia-500 font-bold bg-transparent hover:bg-fuchsia-500 hover:text-white">Logout</p>
                            :
                            <Link to="/login" className="border border-2 border-fuchsia-600 rounded-lg py-2 px-3 text-fuchsia-500 font-bold bg-transparent hover:bg-fuchsia-500 hover:text-white">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;