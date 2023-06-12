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
import PaymentHistory from "../Dashboard/Student/PaymentHistory";
import NotFound from "../Pages/Shared/NotFound";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import StudentRoute from "./StudentRoute";
import InstructorRoute from "./InstructorRoute";
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
                path: 'Allclasseshere',
                element: <Classes />
            },
            {
                path: '/Instructors',
                element: <Instructors />
            },
            {
                path: '/login',
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
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            // student
            {
                path: 'selectedclass',
                element: <StudentRoute><SelectedClass /></StudentRoute>
            },
            {
                path: 'enrolledclass',
                element: <StudentRoute><EnrolledClass /></StudentRoute>
            },
            {
                path: 'payment/:id',
                element: <StudentRoute> <Payment /></StudentRoute>,
                loader: ({ params }) => fetch(`https://assignment-twelve-server-smoky.vercel.app/findSelectedClass/${params.id}`)
            },
            {
                path: 'paymenthistory',
                element: <StudentRoute><PaymentHistory /></StudentRoute>
            },
            // Instructor
            {
                path: 'addaclass',
                element: <InstructorRoute><AddAClass /></InstructorRoute>
            },
            {
                path: 'instructorsclass',
                element: <InstructorRoute> <InstructorsClass /></InstructorRoute>
            },
            // Admin
            {
                path: 'manageclasses',
                element: <AdminRoute><ManageClasses /></AdminRoute>
            },
            {
                path: 'feedback/:id',
                element: <AdminRoute><Feedback /></AdminRoute>
            },
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers /></AdminRoute>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);