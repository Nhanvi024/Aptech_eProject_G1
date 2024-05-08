import { useNavigate } from 'react-router-dom';
import CheckoutCart from '../../components/checkoutComponents/CheckoutCart';
import CheckoutInfo from '../../components/checkoutComponents/CheckoutInfo';
import PaymentMethod from '../../components/checkoutComponents/PaymentMethod';
import { DataContext } from '../../context/DataContext';
import './CheckOut.css'
import React, { useContext, useState } from 'react';

function CheckOut(props) {
    const navigate = useNavigate()
    const { productCart } = useContext(DataContext)
    const [shipping, setShipping] = useState({
        name: 'Fast delivery',
        fee: 10
    })

    const shippingMethods = [
        {
            name: 'Fast delivery',
            fee: 10
        },
        {
            name: 'Economical delivery',
            fee: 5
        }
    ]

    const [errors, setErrors] = useState({ nameError: '', emailError: '', addressError: '', phoneError: '' });
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        comment: ''
    })
    const handleInput = (e) => {
        let { name, value } = e.target
        handleValidate(name, value)
        setForm({ ...form, [name]: value })
    }

    const handleConfirmOrder = (e) => {

        if (Object.keys(errors).length !== 0) {
            e.preventDefault();
            alert('All field is required')
        } else {
            alert('Order successfully. Thank you!!!')
            navigate('/')
        }
    }

    const handleValidate = (name, value) => {
        switch (name) {
            case 'name':
                if (value === '') {
                    errors.nameError = 'Name is required';
                } else if (value.length < 3) {
                    errors.nameError = 'Name must be greater than 3';
                } else {
                    delete errors.nameError;
                }
                break;
            case 'email':
                let emailRegEx = /^\w+@\w+\.[a-zA-Z]{2,4}$/;
                if (value === '') {
                    errors.emailError = ' Email is required';
                } else if (!emailRegEx.test(value)) {
                    errors.emailError = 'Email is not correct';
                } else {
                    delete errors.emailError;
                }
                break;
            case 'phone':
                let phoneRegEx = /^[0-9]{10,12}$/;
                if (value === '') {
                    errors.phoneError = 'Phone number is required';
                } else if (!phoneRegEx.test(value)) {
                    errors.phoneError = 'Phone number is not correct';
                } else {
                    delete errors.phoneError;
                }
                break;
            case 'address':
                if (value === '') {
                    errors.addressError = 'Address is required';
                } else {
                    delete errors.addressError;
                }
                break;
            default:

        }
    }



    return (
        <>
            <img className='imageBanner' src='https://sloboda-studio.com/wp-content/uploads/2020/08/Group-126.jpg.webp'></img>
            <div className='checkout-container'>
                <CheckoutInfo handleInput={handleInput} errors={errors}/>
                <PaymentMethod shipping={shipping} setShipping={setShipping} shippingMethods={shippingMethods} errors={errors} />
                <CheckoutCart shipping={shipping} handleConfirmOrder={handleConfirmOrder}/>
            </div>
        </>

    );
}

export default CheckOut;