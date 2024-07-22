import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalPayment = ({ handleOrderConfirm }) => (
    <PayPalScriptProvider options={{ "client-id": "pk_test_51PfOwm2NHCWbpfb8MYEBt9SoUiDL0cpVsu5HJOzzJzCHBl2AVB384h8o6PacaiXz6AGw3dY9aGVz2mwneYE0nG7000JqKf0u0o" }}>
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
