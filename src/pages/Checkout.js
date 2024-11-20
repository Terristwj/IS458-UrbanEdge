import React from "react";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
    const stripePromise = loadStripe(
        "pk_test_51QJGk5RrGjoC3s6uIrXxiiMYSxnXra43F5FVZYxqvmK6CZE8blKIvWT2xTewxdFmm7SnsuPiaqaKj5zC8NryQA9000WnaUgOH7"
    );

    return (
        <section className="checkout-wrapper">
            <br/>
            <br/>
            <Authenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
            </Authenticator>
        </section>
    );
};

export default Checkout;
