import React from 'react';
import Checkout from './Checkout';

export default class UserStripeButton extends React.Component {
    componentWillMount () {
        debugger
        console.log("this are the props im passing in UserStripeBtn", this.props)
    }
    render(){
        return(
            <div style={decor.big}>
                <p style={decor.title}>Card Payment</p>
                <p style={decor.subtitle}>Click below to pay</p>

                <Checkout 
                checkoutData={{name:this.props.location.state.name,email:this.props.location.state.email,total:this.props.location.state.total,shoppingCart:this.props.location.state.shoppingCart}}
                amount= {this.props.location.state.total}
                label='Pay now'
                />
            </div>
        )
    }
}

const decor={
    big:{
        width: '45%',
        margin: 'auto',
        paddingTop: '2em',
        paddingBottom: '2em'
    },
    title: {
        fontSize: '30px',
        fontFamily:"'EB Garamond', serif",
        textTransform: 'uppercase',
        borderBottom: '2px solid #ddd',
        paddingBottom: '50px',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: '15px',
        fontFamily:"'EB Garamond', serif",
        textTransform: 'uppercase',
        borderBottom: '2px solid #ddd',
        paddingBottom: '50px',
        textAlign: 'center',
        marginBottom: '2em'
    },
 
}

