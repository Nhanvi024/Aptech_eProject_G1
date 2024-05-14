import './PaypalPayment.css'
import React, { useContext } from 'react';
import { PayPalButtons} from "@paypal/react-paypal-js";
import { DataContext } from '../../context/DataContext';

function PaypalPayment(props) {
    const { shipping, handleConfirmOrder } = props
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
            // const name = details.payer.name.given_name;
            handleConfirmOrder()
        });

    }

    return (
        <div className='paypalPayment-container'>
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