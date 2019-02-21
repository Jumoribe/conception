import React from 'react';

export default class SoldOut extends React.Component{
    render(){
        return(
            <span style={{...decor.box, display: this.props.display}}>
               Sorry, we don't have this item available.
            </span>
        )
    }
}    

const decor= {
    box:{
        border: '2px solid black',
        backgroundColor: 'black',
        fontSize: '30px',
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        padding: '1em',
        margin: 'auto'
    }
}