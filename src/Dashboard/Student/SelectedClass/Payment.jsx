import { useLoaderData } from "react-router-dom";



const Payment = () => {
    const data = useLoaderData();
    console.log(data);
    const price = data.price;
    console.log(price);
    return (
        <div>
            <div>
                <h3 className="text-3xl font-semibold">Please payment to enroll: <span className="text-fuchsia-500">{data.name}</span></h3>
            </div>

        </div>
    );
};

export default Payment;