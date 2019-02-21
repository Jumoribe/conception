import React from 'react';

export default class OrderMsg extends React.Component {
state = {}
goHomepage=()=>{
    this.props.history.push({pathname:"/"})
}
render(){

return(
    <div>
        <div style={decor.box}>
            <p> Thank you for shopping with us!</p>
            <p>You will receive an e-mail with your order confirmation, and your items will be delivered in 5 days.</p>
            <button 
            onClick={this.goHomepage}
            className='buttons' style={decor.button}>Back to Homepage</button>
    </div>
    
    </div>
    )
}
}

const decor = {
    box: {
        border: '2px solid rgb(42, 43, 45)',
        padding: '2em 2em',
        width: '35%',
        margin: ' 2em auto',
        fontSize: '20px',
        textAlign: 'center',
    },   
    border: {
        borderBottom: '2px solid rgb(42, 43, 45)',
        paddingTop: '2em',
        paddingBottom: '2em',
        margin: '0 auto'
    },
    button:{
        backgroundColor: 'rgb(26, 27, 28)',
        color: 'white',
        fontSize: '15px',
        textTransform: 'uppercase',
        border: '2px solid rgb(26, 27, 28)',
        position: 'relative',
        textAlign: 'center',
        width: '220px',
        height: '40px',
        outline: 'none',
        marginBottom: '1em',
    }
}