import React from 'react';

export default class FAQ extends React.Component{
    render(){
        return(
            <div style={decor.align}>
                <h3>How do I register?</h3>
                <p>Please go to our Register page to register for an online account with us</p>
                <h3>How do I sign in and sign out of my account?</h3>
                <p>Select the 'Sign In' option at the top of the page and enter your username and password. To sign out of your account, please select the 'Sign Out' option.</p>
                <h3>How can I change my details?</h3>
                <p>Please select 'Change Personal Details' after signing in. You can log in to your account on the Sign In page.</p>
                <h3>I have forgotten my password. What can I do?</h3>
                <p>You can request a new password by clicking on 'Forgotten Password?' on the Sign In page. We will reset your password and send you a new one.</p>
                <p>If you can't remember the email address you registered with, or if you have problems signing in to your account, then please contact our Customer Service team.</p>
                <h3>How do I unsubscribe from the mailing list?</h3>
                <p>Please follow the 'unsubscribe' link from any of our email newsletters. Alternatively, you can let us know by telephone or email.</p>
                <p>It can take up to four weeks for your preferences to be registered on our system, so you may still receive emails from us during this period.</p>
                <h3>How do I return my product?</h3>
                <p>Please see our Delivery and Returns page for information on how to return your products.</p>
                <h3>How can I pay></h3>
                <ul>
                    <li>Visa</li>
                    <li>Visa Debit/Delta</li>
                    <li>MasterCard</li>
                    <li>JCB</li>
                    <li>Maestro UK and International</li>
                    <li>American Express</li>
                    <li>PayPal</li>
                </ul>
                <p>he payment methods accepted may vary depending on the currency in which you wish to pay or the destination country.</p>
                <p>Please see our Terms and Conditions for further information on how you can pay for your order.</p>
                <h3>Whwn will I be charge?</h3>
                <p>When an order is placed, we request a pre-authorisation for the value of the order from your bank/card issuer to ensure that the funds are available. However, this remains simply a pre-authorisation request until the order is shipped, at which point we take payment.</p>
                <p>We have found that some card companies show the initial request and the later charge as two separate entries; we only charge your card once and any 'second' charge is only temporary.</p>
            </div>
        )
    }
}
const decor = {
    align:{
        margin: '3em',
        position: 'relative',
        textAlign: 'center'
    }
}