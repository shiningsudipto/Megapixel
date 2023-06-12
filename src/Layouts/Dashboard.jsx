import { FaCashRegister, FaChalkboardTeacher, FaFolder, FaHome, FaMoneyCheckAlt, FaRegPlusSquare, FaUnlockAlt, FaUsersCog } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import useInstructor from "../Hook/useInstructor";
import useStudent from "../Hook/useStudent";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        {/* Admin */}
                        {
                            isAdmin && <>
                                <li className="text-xl font-semibold"><NavLink to="/dashboard/manageclasses"><FaChalkboardTeacher /> Manage Classes</NavLink></li>
                                <li className="text-xl font-semibold"><NavLink to="/dashboard/manageusers">
                                    <FaUsersCog /> Manage Users</NavLink></li>
                            </>
                        }

                        {/* Instructor */}
                        {
                            isInstructor && <>
                                <li className="text-xl font-semibold"><NavLink to="/dashboard/addaclass">
                                    <FaCashRegister /> Add A Class</NavLink></li>
                                <li className="text-xl font-semibold"><NavLink to="/dashboard/instructorsclass"><FaFolder /> My Class</NavLink></li>
                            </>
                        }

                        {/* Student */}
                        {
                            isStudent && <>
                                <li className="text-xl font-semibold"><NavLink to="/dashboard/selectedclass"><FaRegPlusSquare /> Selected Class</NavLink></li>
                                <li className="text-xl font-semibold"><NavLink to="/dashboard/enrolledclass"><FaUnlockAlt /> Enrolled Class</NavLink></li>
                                <li className="text-xl font-semibold"><NavLink to="/dashboard/paymenthistory"><FaMoneyCheckAlt /> Payment History</NavLink></li>
                            </>
                        }



                        <li className="text-xl font-semibold"><NavLink to="/"><FaHome /> Home</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;