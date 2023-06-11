import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
console.log(stripePromise);

const Payment = () => {
    const data = useLoaderData();
    console.log(data);
    const price = parseFloat(data.price);
    // console.log(price, data.price);
    return (
        <div>
            <div>
                <h3 className="text-3xl font-semibold">Please payment to enroll: <span className="text-fuchsia-500">{data.name}</span></h3>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={price} data={data}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;