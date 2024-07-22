import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PfOwm2NHCWbpfb8MYEBt9SoUiDL0cpVsu5HJOzzJzCHBl2AVB384h8o6PacaiXz6AGw3dY9aGVz2mwneYE0nG7000JqKf0u0o');

const CheckoutForm = ({ handleOrderConfirm }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.error(error);
        } else {
            console.log(paymentMethod);
            handleOrderConfirm();
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className="text-center">
                <h5 className='text-capitalize'>credit card</h5>
            </div>
            <div className="form mt-3">
                <div className="inputbox">
                    <input type="text" name='name' id='name' className='form-control' required />
                    <span className='text-capitalize'>card holder name</span>
                </div>
            </div>
            <CardElement />
            <div className="px-5 pay mt-3">
                <button type='submit' className='text-capitalize btn btn-success btn-block' disabled={!stripe}>Order Now</button>
            </div>
        </form>
    );
};

const VisaPayment = ({ handleOrderConfirm }) => (
    <Elements stripe={stripePromise}>
        <CheckoutForm handleOrderConfirm={handleOrderConfirm} />
    </Elements>
);

export default VisaPayment;
