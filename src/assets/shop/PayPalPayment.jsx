import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalPayment = ({ handleOrderConfirm }) => (
    <PayPalScriptProvider options={{ "client-id": "-11915596RW671400YM2OXSSQ" }}>
        <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: "0.01" // Replace with actual amount
                        },
                    }],
                });
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                    handleOrderConfirm();
                });
            }}
        />
    </PayPalScriptProvider>
);

export default PayPalPayment;
