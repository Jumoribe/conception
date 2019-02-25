import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import UserStripeButton from './UserStripeButton';

const successPayment =  async data => {
    alert ('payment successful');
    console.log("this is the data", data)
    let cart = JSON.parse(localStorage.getItem('shoppingCart'))
    let url = 'http://142.93.228.2/server/emails/confirmationEmail'
    
    try{
      let successfulInfo = await axios.post(url, {
        details: data,
        // shoppingCart: cart,
      })
      console.log("this is the successful info (data and shoppingcart): ", successfulInfo)
    }
    catch(error){
      debugger
    }
    
        let urlone = `http://142.93.228.2/server/products/remove_from_stock/`
          try {
              let infoForStock = await axios.post(urlone, {infoForStock: data})
              console.log("this is cart from checkout ", infoForStock)
          }
           catch(error){
               debugger
           }
           
    //to delete the localStorage.shoppingCart
    finally {
    cart.splice(0)
    localStorage.setItem('shoppingCart', JSON.stringify(cart))
    }
    window.location = '/thankyou'
}


const errorPayment = data => {
    alert('error payment')
    console.log(data)
}

const onToken = (amount,checkoutData) => token =>{
    debugger
    axios.post('http://142.93.228.2/server/products/purchase', //esto es la route que la saco del server
{
    source: token.id,
    currency: 'EUR',
    amount: amount,
})
.then(successPayment(checkoutData))
.catch(errorPayment)
}


const Checkout = ({amount, label,checkoutData}) => 
<StripeCheckout
    
    token = {onToken(amount*100,checkoutData)}
    stripeKey = {'pk_test_F54I22aZRmLbc0RcVpa5xquE'}
    label = {label}
    />

export default Checkout;