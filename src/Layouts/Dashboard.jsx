import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
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
                        {/* Student */}
                        <li className="text-xl font-semibold"><NavLink to="/dashboard/addaclass"> Add A Class</NavLink></li>
                        <li className="text-xl font-semibold"><NavLink to="/dashboard/manageclasses"> Manage Classes</NavLink></li>
                        <li className="text-xl font-semibold"><NavLink to="/dashboard/manageusers"> Manage Users</NavLink></li>
                        <li className="text-xl font-semibold"><NavLink to="/dashboard/instructorsclass"> My Class</NavLink></li>
                        <li className="text-xl font-semibold"><NavLink to="/dashboard/selectedclass"> Selected Class</NavLink></li>
                        <li className="text-xl font-semibold"><NavLink to="/dashboard/enrolledclass"> Enrolled Class</NavLink></li>
                        <li className="text-xl font-semibold"><NavLink to="/"> Home</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;