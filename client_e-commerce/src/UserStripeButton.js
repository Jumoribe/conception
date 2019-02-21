import React from 'react';
import Checkout from './Checkout';

export default class UserStripeButton extends React.Component {
    componentWillMount () {
        debugger
        console.log(this.props)
    }
    render(){
        return(
            <div>
                <Checkout 
                // name={this.props.location.state.name}
                amount= {this.props.location.state.total}
                label='Pay now'
                />
            </div>
        )
    }
}