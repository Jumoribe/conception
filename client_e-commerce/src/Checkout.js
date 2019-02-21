import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const successPayment = data => {
    alert ('payment successful');
    console.log(data)
}

const errorPayment = data => {
    alert('error payment')
    console.log(data)
}

const onToken = (amount) => token =>{
    debugger
    axios.post('http://localhost:3001/products/purchase', 
    {
    source: token.id,
    currency: 'EUR',
    amount: amount
    })
    .then(successPayment)
    .catch(errorPayment)
}

const Checkout = ({amount, label}) => 
    <StripeCheckout
    token = {onToken(amount*100)}
    stripeKey = {'pk_test_ys4WGzHHqv3bJdWWCkT3QJVr'}
    label = {label}
    />

export default Checkout;