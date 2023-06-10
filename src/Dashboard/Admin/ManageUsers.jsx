
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useUsers from "../../Hook/useUsers";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    // const { data: allUsers = [], refetch } = useQuery(['allRegisteredUsers'],
    //     async () => {
    //         const res = await axiosSecure.get('/allRegisteredUsers');
    //         return res.data;
    //     }
    // )

    const [allUsers, refetch] = useUsers();

    const handleRole = (newRole, id) => {
        axiosSecure
            .put(`/users/role/${id}`, { newRole }) // Use 'put' method and pass the newRole in the request body
            .then(res => {
                refetch();
                console.log(newRole);
            })
            .catch(error => {
                console.error('Error updating role:', error);
            });
    };


    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                allUsers.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <th>{user.role}</th>
                                    <th>
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <button
                                                    disabled={user.role === "Instructor"}
                                                    className="btn bg-fuchsia-500 text-white hover:bg-white font-bold hover:text-fuchsia-500 hover:border-fuchsia-600 hover:border-2"
                                                    onClick={() => handleRole("Instructor", user._id)}

                                                >Make Instructor</button>
                                            </div>
                                            <div>
                                                <button
                                                    disabled={user.role === "Admin"}
                                                    className="btn bg-fuchsia-500 text-white hover:bg-white font-bold hover:text-fuchsia-500 hover:border-fuchsia-600 hover:border-2"
                                                    onClick={() => handleRole("Admin", user._id)}

                                                >Make Admin</button>
                                            </div>
                                        </div>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;