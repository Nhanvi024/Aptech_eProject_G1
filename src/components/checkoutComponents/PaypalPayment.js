import './PaypalPayment.css'
import React, { useContext } from 'react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { DataContext } from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';

function PaypalPayment(props) {
    const navigate = useNavigate()
    const { shipping, errors } = props
    const { totalPayment } = useContext(DataContext)
    const onCreateOrder = (data, actions) => {

        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        currency_code: 'USD',
                        value: `${(totalPayment + shipping.fee).toFixed(2)}`,
                    },
                },
            ]
        })
            .then(orderId => orderId)
    }

    const onApproveOrder = (data, actions) => {

        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
            navigate('/')
        });

    }

    return (
        <div className='paypalPeyment-container'>
            <PayPalButtons
                style={{ layout: "vertical" }}
                disabled={false}
                forceReRender={[shipping, totalPayment]}
                fundingSource={undefined}
                createOrder={(data, actions) => onCreateOrder(data, actions)}
                onApprove={(data, actions) => onApproveOrder(data, actions)}
            />
        </div>

    );
}

export default PaypalPayment;