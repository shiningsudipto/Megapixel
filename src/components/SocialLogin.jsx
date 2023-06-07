import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const handleGoogleSign = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, role: 'student', image: loggedUser.photoURL }
                fetch('http://localhost:5000/newUser', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div>
            <div className="divider my-3">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleSign} className="btn btn-circle btn-outline text-2xl hover:text-blue-400">
                    <FaGoogle />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;