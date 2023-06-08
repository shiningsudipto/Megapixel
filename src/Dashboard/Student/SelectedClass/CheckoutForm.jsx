import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useAuth from "../../../Hook/useAuth";

const CheckoutForm = ({ price, data }) => {
    console.log("Selected data", data);
    console.log("selected data ID:", data.ClassId);
    const stripe = useStripe();
    const { user } = useAuth();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                    console.log(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        console.log('Card', card);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
            console.log('[error]', error);
        } else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.email || 'anonymous',
                },
            },
        },);
        if (confirmError) {
            console.log(confirmError);
        }
        console.log("payment intent", paymentIntent);
        setProcessing(false)
        if (paymentIntent && paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            // save payment information to the server
            const payment = {
                studentEmail: user?.email,
                transactionId: paymentIntent.id,
                price,
                classId: data._id,
                date: new Date(),
                name: data?.name,
                image: data.image
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        // Handle successful payment
                        console.log("payment korci", data._id);
                        // Update available seats
                        axiosSecure.put(`/updateavailableseats/${data.ClassId}`)
                            .then(res => {
                                console.log("Update available seats:", res);
                                // Handle the response if needed
                            })
                    }
                })
        }
        if (confirmError) {
            console.log(confirmError);
            // Update state or display an error message
        }
    }

    // const handleAvailableSeats = (classId) => {
    //     axiosSecure.put(`/updateavailableseats/${classId}`)
    //         .then(res => {
    //             console.log("Update available seats:", res);
    //             // Handle the response if needed
    //         })
    //         .catch(error => {
    //             console.log("Error updating available seats:", error);
    //             // Handle the error if needed
    //         });
    // };

    return (
        <div className="text-center">
            <form className="w-3/4 mx-auto p-4" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '18px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <button disabled={!stripe || !clientSecret || processing} className="btn btn-sm mt-6" type="submit" >
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-500 text-xl">{cardError}</p>
            }
            {
                transactionId && <p className="text-green-500 text-xl">Transaction complete with transaction id: <span className="text-green-500 text-xl font-semibold">{transactionId}</span> </p>
            }
        </div>
    );
};

export default CheckoutForm;