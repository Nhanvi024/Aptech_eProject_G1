import './CheckOut.css'

import CheckoutCart from '../../components/checkoutComponents/CheckoutCart';
import CheckoutInfo from '../../components/checkoutComponents/CheckoutInfo';
import PaymentMethod from '../../components/checkoutComponents/PaymentMethod';
import { DataContext } from '../../context/DataContext';
import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function CheckOut(props) {
    const navigate = useNavigate()
    const { productCart, setProductCart } = useContext(DataContext)

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
    const [paymentMethod, setPaymentMethod] = useState('cash')
    const [errors, setErrors] = useState({ nameError: '', emailError: '', addressError: '', phoneError: '' });
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        comment: ''
    })

    //** Input Form Order */
    const handleInput = (e) => {
        if (!productCart.length) {
            toast.warning("Product Cart is empty!", {
                onClose: () => navigate('/')
            })
        } else {
            let { name, value } = e.target
            handleValidate(name, value)
            setForm({ ...form, [name]: value })
        }
    }

    const OrderSuccess = () => {
        toast.success("Order successfully! Thank you", {
            onClose: () => {
                setProductCart([]);
                navigate('/')
            }
        })
    }
   
    const OrderFailure = () =>{
        toast.error("Order information is required",{
            onOpen: () => {
                handleValidate('name', form.name)
                handleValidate('phone', form.phone)
                handleValidate('email', form.email)
                handleValidate('address', form.address)
                setErrors({ ...errors })
            }
        })
    }

    const handleConfirmOrder = (e) => {
        if (!productCart.length) {
            toast.warning("Product Cart is empty!", {
                onClose: () => navigate('/')
            })
        } else {
            if (Object.keys(errors).length !== 0) {
                e.preventDefault();
                OrderFailure()
            } else {
                OrderSuccess()
            }
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

        <motion.div className='checkout-page-container' initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
        >

            <img className='imageBanner' src='https://sloboda-studio.com/wp-content/uploads/2020/08/Group-126.jpg.webp' alt='...' />
            <div className='checkout-container'>
                <CheckoutInfo handleInput={handleInput} errors={errors} />
                <PaymentMethod
                    shipping={shipping}
                    setShipping={setShipping}
                    shippingMethods={shippingMethods}
                    errors={errors}
                    handleConfirmOrder={handleConfirmOrder}
                    paymentMethod={paymentMethod}
                    setPaymentMethod={setPaymentMethod} 
                    OrderSuccess={OrderSuccess}/>

                <CheckoutCart
                    shipping={shipping}
                    handleConfirmOrder={handleConfirmOrder}
                    paymentMethod={paymentMethod} />
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                theme="colored"
                transition={Slide}
                style={
                    {
                        fontSize: "16px",
                        width: "400px"
                    }

                }
            />
        </motion.div>

    );
}

export default CheckOut;