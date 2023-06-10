import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layouts/Dashboard";
import SelectedClass from "../Dashboard/Student/SelectedClass/SelectedClass";
import EnrolledClass from "../Dashboard/Student/EnrolledClass/EnrolledClass";
import Payment from "../Dashboard/Student/SelectedClass/Payment";
import AddAClass from "../Dashboard/Instructor/AddAClass";
import InstructorsClass from "../Dashboard/Instructor/InstructorsClass";
import ManageClasses from "../Dashboard/Admin/ManageClasses";
import Feedback from "../Dashboard/Admin/Feedback";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/classes',
                element: <Classes />
            },
            {
                path: '/Instructors',
                element: <Instructors />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'registration',
                element: <Registration />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            // student
            {
                path: 'selectedclass',
                element: <SelectedClass />
            },
            {
                path: 'enrolledclass',
                element: <EnrolledClass />
            },
            {
                path: 'payment/:id',
                element: <Payment />,
                loader: ({ params }) => fetch(`http://localhost:5000/findSelectedClass/${params.id}`)
            },
            // Instructor
            {
                path: 'addaclass',
                element: <AddAClass />
            },
            {
                path: 'instructorsclass',
                element: <InstructorsClass />
            },
            // Admin
            {
                path: 'manageclasses',
                element: <ManageClasses />
            },
            {
                path: 'feedback/:id',
                element: <Feedback />
            },
            {
                path: 'manageusers',
                element: <ManageUsers />
            }
        ]
    },
]);