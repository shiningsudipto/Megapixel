import moment from "moment/moment";
import useEnrolledClass from "../../Hook/useEnrolledClass";

const PaymentHistory = () => {
    const [myEnrolledClass] = useEnrolledClass();

    // Sort the array based on the date field in ascending order
    const sortedEnrolledClass = myEnrolledClass.sort((a, b) => new Date(b.date) - new Date(a.date));

    console.log(sortedEnrolledClass);
    return (
        <div>
            <div className="text-3xl font-bold text-fuchsia-500 text-center my-8">
                <h2>Payment History</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Transaction ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sortedEnrolledClass.map((pHistory, index) =>
                                    <tr key={pHistory._id}>
                                        <th>{index + 1}</th>
                                        <td>{moment(pHistory.date).format('MMMM Do YYYY, h:mm:ss')}
                                        </td>
                                        <td>{pHistory.name}</td>
                                        <td>{pHistory.price}</td>
                                        <td>{pHistory.transactionId}</td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
